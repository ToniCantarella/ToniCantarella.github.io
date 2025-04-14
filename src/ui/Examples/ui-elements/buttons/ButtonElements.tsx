import { UIElementDialogContent, UIElementRow } from "../UIElementDialogContent"
import { MultiSelectButton } from "./MultiSelect"
import { Switch } from "./Switch"

export const ButtonElements = () => {
    return (
        <UIElementDialogContent>
            <UIElementRow>
                <MultiSelectButton />
                <Switch />
            </UIElementRow>
        </UIElementDialogContent>
    )
}