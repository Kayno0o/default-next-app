import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseButtonProps {
  children: any
  className?: string
  loading?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  small?: boolean
  type?: 'button' | 'submit' | 'reset'
}

function Button(props: BaseButtonProps) {
  return <button
    type={props.type}
    className={twMerge(
      'relative w-fit cursor-pointer rounded-full bg-white px-6 py-1 font-bold text-black transition-colors duration-300 hover:bg-amber-300',
      (props.loading || props.disabled) && 'cursor-not-allowed',
      props.small && 'px-4 py-0.5 text-sm',
      props.className,
    )}
    onClick={props.onClick}
    disabled={props.loading || props.disabled}
  >
    <div className={props.loading ? 'opacity-0' : ''}>{props.children}</div>
    {props.loading && (
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <FontAwesomeIcon icon={faSpinner} className="h-4 w-4 animate-spin" />
      </div>
    )}
  </button>
}

export default Button
