import React from 'react'

interface ButtonProps {
  onClick?: () => void
  customClass?: string
  text: string
  icon?: React.ReactElement
  size: 'base' | 'lg'
  color: 'primary' | 'sub'
}

export const Button = ({ onClick, customClass, text, icon, size, color }: ButtonProps) => {
  const buttonLarge = 'font-bold text-lg md:text-2xl py-3 md:py-5 md:px-4 w-full md:w-[486px]'
  const buttonBase = 'font-bold text-sm py-[6px] px-4'
  const buttonSize = size === 'lg' ? buttonLarge : buttonBase

  const primary = 'bg-rose-700 text-white'
  const sub = 'bg-gray-100 text-black'
  const buttonColor = color === 'primary' ? primary : sub

  return (
    <button
      onClick={onClick}
      className={`rounded-md flex items-center gap-[10px] ${buttonColor} ${buttonSize} ${customClass}`}
    >
      {icon}
      <span className="-mt-[2px]">{text}</span>
    </button>
  )
}
