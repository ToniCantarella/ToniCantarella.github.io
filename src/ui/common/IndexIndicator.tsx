import "./IndexIndicator.scss"

export const IndexIndicator = (props: { length: number, currentIndex: number }) => {
    return (
        <div className="index-indicator">
            <div
                id="current"
                className="indicator"
                style={{
                    left: `calc(${props.currentIndex} * var(--indicator-size) * 2)`
                }}
            />
            {Array.from({ length: props.length }, (_, indicator) => (
                <div
                    key={indicator}
                    className="indicator"
                />
            ))}
        </div>
    )
}