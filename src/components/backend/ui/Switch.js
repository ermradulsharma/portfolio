import * as React from "react"
import { cn } from "@/core/Lib/utils"

const Switch = React.forwardRef(({ className, checked, onChange, ...props }, ref) => {
    return (
        <button type="button" ref={ref} onClick={() => onChange?.(!checked)} className={cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111118] disabled:cursor-not-allowed disabled:opacity-50", checked ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]" : "bg-white/10", className)} {...props}>
            <span className={cn("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out", checked ? "translate-x-5" : "translate-x-0")}></span>
        </button>
    )
})
Switch.displayName = "Switch"

export { Switch }
