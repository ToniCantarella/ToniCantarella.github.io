import "./ProgressIndicator.scss"

export const ProgressIndicator = (props: { progress: number }) => {
    return (
        <div className="progress-indicator">
            <div
                className="progress-loader"
                style={{
                    width: `${props.progress}%`
                }}
            />
        </div>
    )
}