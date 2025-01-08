export const Badge = ({ size, variant, children }) => {
    return (
        <span className={`bg-white inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${size} ${variant}`}>
            {children}
        </span>
    )
}