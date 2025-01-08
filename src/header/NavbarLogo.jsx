export const NavbarLogo = ({src, alt}) => {
    return (
        <figure className="flex-1">
            <img className="max-h-12" src={src} alt={alt} />
        </figure>
    )
}