import { UIElementDialogContent } from "../UIElementDialogContent"
import { SearchAndSort } from "./SearchAndSort"
import { Slider } from "./Slider"

export const InputElements = () => {
    return (
        <UIElementDialogContent>
            <Slider />
            {import.meta.env.MODE === "development" &&
                <SearchAndSort />
            }
        </UIElementDialogContent>
    )
}