import React, { FC, FunctionComponent, MouseEvent, ReactNode } from 'react'

type ButtonVariants = "contained" | "outlined" | "text";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  color?:"primary"|"secondary" | "default";
  size?:"small" | "medium" | "large";
  isLoading?:boolean;
}

//type extendedButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> 

const Button:FC<ButtonProps> = ({color="primary", variant="contained",children,size="medium", disabled=false, onClick, className,...rest}) => {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  }

  const constructClassName:()=>string = () => {
    const colorVariantCls = `btn-${color}-${variant}`;
    const sizeCls = `btn-${size}`
    return ["btn", colorVariantCls, sizeCls].join(" ")
  }

  return (
    <button disabled={disabled} className={constructClassName()+ " " + className}  onClick={handleClick} {...rest}>
      {children}
    </button>
  )
}

export default Button