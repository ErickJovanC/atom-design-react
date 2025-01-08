export const Image = ({ src, alt, width = 200, rounded = 'none'}) => {
    return (
        <img src={src} alt={alt} className={`size-10 flex-none rounded-${rounded}`} width={width} />
    )
}