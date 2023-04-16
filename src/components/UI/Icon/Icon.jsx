import Icons from 'assets/icons/Icons'

const Icon = (
    {
        isImage,
        name,
        iconSource,
        src,
        alt,
        style,
        className,
        ...props
    },
)=> {
    if (isImage) {
        return (
            <img
                {...props}
                src={src}
                alt={alt || 'icon'}
                className={className}
                style={style}
            />
        )
    }

    return (
        <span
            {...props}
            className={className}
            style={style}
        >
            {Icons[name] || iconSource}
        </span>
    )
}

export default Icon
