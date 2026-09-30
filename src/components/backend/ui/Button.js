import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/core/Lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
  {
    variants: {
      variant: {
        default: "neu-button text-white border border-white/5 hover:text-cyan-400",
        destructive: "neu-button text-rose-400 border border-rose-500/30 hover:bg-rose-500/10",
        outline: "neu-button border border-white/10 text-white/80 hover:text-white",
        secondary: "neu-button text-white/80 border border-white/5 hover:text-purple-400",
        ghost: "hover:bg-white/5 text-white/70 hover:text-cyan-400",
        link: "text-cyan-400 underline-offset-4 hover:underline",
        premium: "neu-button neu-glow-cyan text-white border border-cyan-500/40 hover:scale-105",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-xl px-3 text-[10px]",
        lg: "h-12 rounded-2xl px-8 text-sm",
        icon: "h-9 w-9 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
