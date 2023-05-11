export class ToastClass {
  message: string;
  type: ToastType;
  open = true;

  constructor(message: string, type: ToastType) {
    this.message = message;
    this.type = type;
  }
}

export const ToastColor: { [type in ToastType]: { bg: string; border: string; text: string } } = {
  error: {
    bg: 'bg-red-100',
    border: 'border-red-500',
    text: 'text-red-500',
  },
  info: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-500',
  },
  success: {
    bg: 'bg-green-100',
    border: 'border-green-500',
    text: 'text-green-500',
  },
  warning: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-500',
    text: 'text-yellow-500',
  },
};

export type ToastType = 'success' | 'error' | 'info' | 'warning';
