import { UIElementDialogContent } from "../UIElementDialogContent"
import { MultiSelectButton } from "./MultiSelect"
import { RippleButton } from "./Ripple"
import { Switch } from "./Switch"

export const ButtonElements = () => {
    return (
        <UIElementDialogContent>
            <RippleButton />
            <Switch />
            <MultiSelectButton />
        </UIElementDialogContent>
    )
}