import { ButtonGroupItem } from "./ButtonGroupItem"

export const ButtonGroup = ({ items }) => {
    return (
        <div className="inline-flex border rounded border-black">
            {items.map((item, index) => (
                <ButtonGroupItem
                    key={index}
                    label={item.label}
                    isActive={item.isActive}
                    src={item.src}
                />
            ))}
        </div>
    )
}