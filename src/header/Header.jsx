import { Input } from "../form/Input"
import { NavbarItem } from "./NavbarItem"
import { NavbarLogo } from "./NavbarLogo"
import { Badge } from "../utils/Badge"
import { Image } from "../utils/Image"

export const Header = () => {
    return (
        <header className="bg-zinc-950 py-4">
            <div className="flex items-center justify-between m-auto max-w-7xl">
                <NavbarLogo src="/src/assets/images/logo.svg" alt="Logo" />
                <nav className="flex-1">
                    <ul className="flex gap-1 justify-center">
                        <NavbarItem label="Home" />
                        <NavbarItem label="Google" url="https://google.com" target="_blank" />
                    </ul>
                </nav>
                <Input label="Año" placeholder="2024" type="number"/>
                <Badge size="xl" variant="white" >
                    24 Colegios
                </Badge>
                <Image src="/src/assets/images/avatar.png" alt="Logo" rounded="full"/>
            </div>
        </header>
    )
}