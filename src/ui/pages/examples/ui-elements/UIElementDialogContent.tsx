import "./UIElementDialogContent.scss"

type UIElementDialogContentProps = {
    children: React.ReactNode
}

export const UIElementDialogContent = (props: UIElementDialogContentProps) => {
    return (
        <div id="ui-element-dialog-content">
            {props.children}
        </div>
    )
}

type UIElementRowProps = {
    children: React.ReactNode
}

export const UIElementRow = (props: UIElementRowProps) => {
    return (
        <div className="ui-element-row">
            {props.children}
        </div>
    )
}