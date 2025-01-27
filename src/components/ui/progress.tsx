import * as React from "react"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
    max?: number
    indicatorClassName?: string
}

export function Progress({
                             className,
                             value = 0,
                             max = 100,
                             indicatorClassName,
                             ...props
                         }: ProgressProps) {
    return (
        <div
            className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-900/20 ${className || ''}`}
            {...props}
        >
            <div
                className={`h-full w-full flex-1 bg-blue-500 transition-all ${indicatorClassName || ''}`}
                style={{
                    transform: `translateX(-${100 - (value / max) * 100}%)`
                }}
            />
        </div>
    )
}