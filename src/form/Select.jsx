import { SelectItem } from "./SelectItem"

export const Select = ({ options }) => {
    return (
        <select class="border border-gray-300 rounded px-4 py-2">
            {options.map((option, index) => (
                <SelectItem key={index} label={option.label} value={option.value} />
            ))}
        </select>
    )
}