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
  const buttonLarge = 'font-bold text-lg md:text-2xl py-3 md:py-5 md:px-4 w-full md:w-[486px] shadow-md'
  const buttonBase = 'font-bold text-sm py-[6px] px-4 shadow'
  const buttonSize = size === 'lg' ? buttonLarge : buttonBase

  const primary = 'bg-rose-700 text-white hover:bg-rose-700/80'
  const sub = 'bg-gray-100 text-black hover:bg-gray-100/60'
  const buttonColor = color === 'primary' ? primary : sub

  return (
    <button
      onClick={onClick}
      className={`rounded-md flex items-center gap-[10px] duration-100 transition ease-out ${buttonColor} ${buttonSize} ${customClass}`}
    >
      {icon}
      <span className="-mt-[2px]">{text}</span>
    </button>
  )
}
