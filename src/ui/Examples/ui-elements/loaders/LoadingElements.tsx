import { UIElementDialogContent, UIElementRow } from "../UIElementDialogContent"
import { DotsGrid } from "./dots/DotsGrid"
import { Ellipsis } from "./dots/Ellipsis"
import { CircleRegular } from "./spinners/CircleRegular"
import { CircleSpiral } from "./spinners/CircleSpiral"
import { TrianglesToCenter } from "./dots/TrianglesToCenter"

export const LoadingElements = () => {
    return (
        <UIElementDialogContent>
            <UIElementRow>
                <CircleRegular />
                <CircleSpiral />
            </UIElementRow>

            <UIElementRow>
                <></>
            </UIElementRow>

            <UIElementRow>
                <DotsGrid />
                <Ellipsis />
                <TrianglesToCenter />
            </UIElementRow>
        </UIElementDialogContent>
    )
}