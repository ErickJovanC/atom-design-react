export const ButtonGroupItem = ({ label, src = '#', isActive = false }) => {
    let color;
    if (isActive) {
        color = "bg-black border-black text-neutral-50"
    } else {
        color = "bg-transparent border-gray-300 text-neutral-800"
    }

    return (
        <a href={src}>
            <button type="button"
                className={`items-center flex justify-center gap-2 whitespace-nowrap ${color} px-6 py-2.5 rounded-none border-0 border-l first:border-l-0 font-semibold`}>
                    <span className="flex items-center gap-2">
                        <span>{label}</span>
                    </span>
            </button>
        </a>
    )
}