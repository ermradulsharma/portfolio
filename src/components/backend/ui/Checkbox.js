import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/core/Lib/utils"

const Checkbox = React.forwardRef(({ className, checked, onChange, ...props }, ref) => {
    return (
        <div className="flex items-center justify-center">
            <button type="button" ref={ref} onClick={() => onChange?.(!checked)} className={cn("peer h-5 w-5 shrink-0 rounded-md border border-white/20 bg-white/[0.02] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all flex items-center justify-center", checked && "bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]", className)} {...props}>
                {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
            </button>
        </div>
    )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
