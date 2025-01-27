import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline'
}

export function Badge({
                          className,
                          variant = "default",
                          ...props
                      }: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variants = {
        default: "bg-gray-900/50 text-white hover:bg-gray-900/70",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-100"
    }

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${className || ''}`}
            {...props}
        />
    )
}