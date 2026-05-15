import * as React from "react"
import { cn } from "@/core/Lib/utils"

/**
 * Reusable polished Custom Select Dropdown UI element matching Input & Switch aesthetics.
 */
const Select = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <select className={cn("flex h-10 w-full rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:border-white/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all backdrop-blur-sm cursor-pointer", className)} ref={ref} {...props}>
            {children}
        </select>
    )
})
Select.displayName = "Select"

export { Select }
