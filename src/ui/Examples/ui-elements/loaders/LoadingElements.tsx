import { UIElementDialogContent, UIElementRow } from "../UIElementDialogContent"
import { DotsGrid } from "./dots/DotsGrid"
import { Ellipsis } from "./dots/Ellipsis"
import { CircleRegular } from "./spinners/CircleRegular"
import { CircleSpiral } from "./spinners/CircleSpiral"
import { TrianglesToCenter } from "./dots/TrianglesToCenter"
import { ProgressBar } from "./bars/ProgressBar"
import { CircleProgress } from "./spinners/CircleProgress"
import { ColumnBar } from "./bars/ColumnBar"
import { Loader } from "./Loader"

export const LoadingElements = () => {
    return (
        <UIElementDialogContent>
            <UIElementRow>
                <CircleRegular />
                <CircleSpiral />
                <CircleProgress />
            </UIElementRow>

            <UIElementRow>
                <ProgressBar />
                <ColumnBar />
                <Loader>
                    <div></div>
                </Loader>
            </UIElementRow>

            <UIElementRow>
                <DotsGrid />
                <Ellipsis />
                <TrianglesToCenter />
            </UIElementRow>
        </UIElementDialogContent>
    )
}