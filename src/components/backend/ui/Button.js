import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/core/Lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-white text-[#0a0a0f] hover:bg-white/90 shadow-lg shadow-white/10",
        destructive: "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
        outline: "border border-white/10 bg-transparent hover:bg-white/5 hover:text-white text-white/80",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/5",
        ghost: "hover:bg-white/5 text-white/70 hover:text-white",
        link: "text-cyan-400 underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
