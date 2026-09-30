import * as React from "react";
import { cn } from "@/core/Lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 w-full rounded-2xl neu-inset px-4 py-2 text-xs font-mono text-white placeholder:text-white/20 border border-white/5 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
