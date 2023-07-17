import Image from "next/image"
import { ButtonProps } from "./Button.props"

export const Button = ({title, type, leftIcon, rightIcon, isSubmitting, handleClick, bgColor, textColor, disabled = false}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      disabled={isSubmitting || disabled}
      className={`
        flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full
        ${isSubmitting || disabled ? 'bg-black/50' : bgColor || 'bg-primary-purple'}
        ${textColor || 'text-white'}
      `}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="leftIcon"/>}
      {title}
      {rightIcon && <Image src={rightIcon} width={14} height={14} alt="rightIcon"/>}
    </button>
  )
}
