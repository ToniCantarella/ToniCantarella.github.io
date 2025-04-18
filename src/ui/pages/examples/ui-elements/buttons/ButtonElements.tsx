import { UIElementDialogContent, UIElementRow } from "../UIElementDialogContent"
import { MultiSelectButton } from "./MultiSelect"
import { RippleButton } from "./Ripple"
import { Switch } from "./Switch"

export const ButtonElements = () => {
    return (
        <UIElementDialogContent>
            <UIElementRow>
                <MultiSelectButton />
                <RippleButton />
                <Switch />
            </UIElementRow>
        </UIElementDialogContent>
    )
}