export const Input = ({ label, type = 'text', placeholder, value}) => {
    return (
        <div>
            <label for="name" className="z-20 flex text-neutral-600 text-xs font-medium ml-3 -mb-1.5">
                <span class="text-gray-700 bg-white px-1 text-xs">{label}</span>
            </label>
            <label for="name"
                className="flex items-center border border-gray-300 rounded-lg focus-within:ring-4 focus-within:ring-purple-650 focus-within:border-purple-600 focus-within:z-10 w-full h-10 px-3.5 focus:border-slate-700">
                <input id="name"
                    name="name"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    class="text-slate-700 focus:border-none outline-none ml-2 placeholder-gray-500 w-full bg-transparent" />
            </label>
        </div>
    )
}