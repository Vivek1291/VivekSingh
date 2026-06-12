import { LucideIcon } from 'lucide-react'
import type { ThemeColor } from '../constants/skillThemes'
export type SkillGroup = {
  category: string

  iconTheme: {
    icon: LucideIcon
    color: ThemeColor
  }

  skills: {
    name: string
    icon: LucideIcon
  }[]
}