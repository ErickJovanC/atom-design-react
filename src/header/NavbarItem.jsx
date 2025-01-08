export const NavbarItem = ({label, url = '#', target = '_self'}) => {
    return (
        <li>
            <a
                href={url}
                target={target}
                className="bg-inverter text-base text-white px-3 py-2.5 rounded font-semibold">
                {label}
            </a>
        </li>
    )
}