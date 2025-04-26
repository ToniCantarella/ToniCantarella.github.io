import { UIElementDialogContent, UIElementRow } from "../UIElementDialogContent"
import { Slider } from "./Slider"

export const InputElements = () => {
    return (
        <UIElementDialogContent>
            <UIElementRow>
                <Slider />
            </UIElementRow>
        </UIElementDialogContent>
    )
}