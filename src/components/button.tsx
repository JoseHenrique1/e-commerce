import { ComponentProps } from "react";

interface props extends ComponentProps<'button'> {
  children: React.ReactNode,
  variant?: "default" | "outline" | "ghost",
  className?: string
}
function Button({children,variant,  ...props}: props) {
  const variantClass = {
    "default": "flex justify-center items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-400 active:ring-2 active:ring-blue-500",
    "outline": "flex justify-center items-center gap-2 px-2 py-1 bg-transparent text-white rounded hover:bg-blue-300 active:ring-2 active:ring-blue-500",
    "ghost": "flex justify-center items-center gap-2 px-2 py-1 bg-transparent text-blue-500 rounded hover:bg-blue-400 hover:text-white active:ring-2 active:ring-blue-500"
  }
  
  return ( 
    <button
      className={variantClass[variant||"default"]}
      {...props}
    >{children}</button>
   );
}

export default Button;