import "./Loader.scss"

type LoaderProps = {
    children: React.ReactNode
}

export const Loader = (props: LoaderProps) => {
    return (
        <div className="loader">
            {props.children}
        </div>
    )
}