import React from "react";
import { cn } from "@/core/Lib/utils";

export const Image = React.forwardRef(({ src, fallbackSrc, alt = "image", className, containerClassName, ...props }, ref) => {
    const [imgSrc, setImgSrc] = React.useState(src);
    const [hasFailed, setHasFailed] = React.useState(false);

    React.useEffect(() => {
        setImgSrc(src);
        setHasFailed(false);
    }, [src]);

    const handleLoadError = () => {
        if (imgSrc === src && fallbackSrc) {
            setImgSrc(fallbackSrc);
        } else {
            setHasFailed(true);
        }
    };

    return (
        <div className={cn("h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 transition-all shadow-sm overflow-hidden flex-shrink-0", containerClassName)}>
            {hasFailed ? (
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-[10px] font-bold text-cyan-400 tracking-tighter select-none">
                    {alt.substring(0, 2).toUpperCase()}
                </div>
            ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img ref={ref} src={imgSrc} alt={alt} className={cn("h-full w-full p-1.5 object-contain filter brightness-90 contrast-125 hover:brightness-100 transition-all", className)} onError={handleLoadError} {...props} />
            )}
        </div>
    );
});

Image.displayName = "Image";
