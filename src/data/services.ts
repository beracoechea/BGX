import {
  BarChart3,
  Bot,
  Cable,
  ChartLine,
  LayoutDashboard,
  Megaphone,
  MonitorSmartphone,
  PieChart,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceItem {
  icon: LucideIcon
  label: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  accent: string
  items: ServiceItem[]
}

export const services: ServiceCategory[] = [
  {
    id: 'transformacion',
    title: 'Transformación Digital',
    description:
      'Modernizamos tu operación con tecnología que se adapta a tu negocio, no al revés.',
    accent: 'from-brand-500 to-indigo-500',
    items: [
      { icon: MonitorSmartphone, label: 'Software empresarial a medida' },
      { icon: Workflow, label: 'Automatización de procesos' },
      { icon: Cable, label: 'Integración de sistemas' },
    ],
  },
  {
    id: 'crecimiento',
    title: 'Crecimiento Comercial',
    description:
      'Conectamos tu equipo con más clientes y convertimos oportunidades en ventas reales.',
    accent: 'from-violet-500 to-purple-500',
    items: [
      { icon: Users, label: 'CRM y gestión de clientes' },
      { icon: Target, label: 'Estrategias digitales' },
      { icon: Bot, label: 'Automatización de marketing' },
      { icon: Megaphone, label: 'Campañas de adquisición' },
    ],
  },
  {
    id: 'inteligencia',
    title: 'Inteligencia de Negocio',
    description:
      'Convertimos tus datos en decisiones claras con visibilidad total de tu negocio.',
    accent: 'from-cyan-500 to-teal-500',
    items: [
      { icon: LayoutDashboard, label: 'Dashboards' },
      { icon: BarChart3, label: 'KPIs' },
      { icon: PieChart, label: 'Reportes ejecutivos' },
      { icon: ChartLine, label: 'Optimización basada en datos' },
    ],
  },
]

export const heroStats = [
  { value: '3×', label: 'Más eficiencia operativa' },
  { value: '40%', label: 'Reducción de tareas manuales' },
  { value: '360°', label: 'Visibilidad del negocio' },
]
