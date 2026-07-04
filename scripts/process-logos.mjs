import sharp from 'sharp'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2)
}

function removeBackgroundFloodFill(data, width, height, threshold = 48) {
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ]

  let bgR = 0
  let bgG = 0
  let bgB = 0
  for (const [x, y] of corners) {
    const i = (y * width + x) * 4
    bgR += data[i]
    bgG += data[i + 1]
    bgB += data[i + 2]
  }
  bgR = Math.round(bgR / corners.length)
  bgG = Math.round(bgG / corners.length)
  bgB = Math.round(bgB / corners.length)

  const visited = new Uint8Array(width * height)
  const queue = []

  const tryPush = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const idx = y * width + x
    if (visited[idx]) return
    const i = idx * 4
    if (colorDistance(data[i], data[i + 1], data[i + 2], bgR, bgG, bgB) > threshold) return
    visited[idx] = 1
    queue.push(idx)
  }

  for (let x = 0; x < width; x++) {
    tryPush(x, 0)
    tryPush(x, height - 1)
  }
  for (let y = 0; y < height; y++) {
    tryPush(0, y)
    tryPush(width - 1, y)
  }

  while (queue.length > 0) {
    const idx = queue.pop()
    const x = idx % width
    const y = Math.floor(idx / width)
    const i = idx * 4
    data[i + 3] = 0
    tryPush(x - 1, y)
    tryPush(x + 1, y)
    tryPush(x, y - 1)
    tryPush(x, y + 1)
  }

  for (let idx = 0; idx < width * height; idx++) {
    if (visited[idx]) continue
    const i = idx * 4
    const dist = colorDistance(data[i], data[i + 1], data[i + 2], bgR, bgG, bgB)
    if (dist < threshold + 12) {
      data[i + 3] = Math.round(((dist - threshold) / 12) * 255)
    }
  }
}

async function removeBackground(input, output, threshold = 48) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  removeBackgroundFloodFill(data, info.width, info.height, threshold)

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output)

  console.log(`Created ${output}`)
}

async function createIconPng(size, outputPath, source) {
  const padding = 0.14
  const innerSize = Math.round(size * (1 - padding * 2))
  const logo = await sharp(source)
    .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 5, g: 7, b: 20, alpha: 1 },
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(outputPath)

  console.log(`Created ${outputPath}`)
}

async function createIconPngs(source) {
  await createIconPng(180, join(publicDir, 'apple-touch-icon.png'), source)
  await createIconPng(32, join(publicDir, 'favicon-32.png'), source)
  await createIconPng(16, join(publicDir, 'favicon-16.png'), source)
}

await removeBackground(join(publicDir, 'logo.jpeg'), join(publicDir, 'logo.png'), 52)
await removeBackground(join(publicDir, 'dark.jpeg'), join(publicDir, 'dark.png'), 40)
await removeBackground(join(publicDir, 'light.jpeg'), join(publicDir, 'light.png'), 40)

await createIconPngs(join(publicDir, 'logo.png'))

console.log('Logo assets ready')
