import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

export class ToastClass {
  message: string
  type: ToastType
  open = true

  constructor(message: string, type: ToastType) {
    this.message = message
    this.type = type
  }
}

export const ToastColor: { [type in ToastType]: ToastColorType } = {
  error: {
    bg: 'bg-red-300',
    border: 'border-red-500',
    icon: faExclamationCircle,
    text: 'text-red-500',
  },
  info: {
    bg: 'bg-blue-300',
    border: 'border-blue-500',
    icon: faInfoCircle,
    text: 'text-blue-500',
  },
  success: {
    bg: 'bg-green-300',
    border: 'border-green-500',
    icon: faCheckCircle,
    text: 'text-green-500',
  },
  warning: {
    bg: 'bg-amber-300',
    border: 'border-amber-500',
    icon: faExclamationTriangle,
    text: 'text-amber-500',
  },
}

export interface ToastColorType { bg: string; border: string; icon: IconProp; text: string }

export type ToastType = 'success' | 'error' | 'info' | 'warning'
