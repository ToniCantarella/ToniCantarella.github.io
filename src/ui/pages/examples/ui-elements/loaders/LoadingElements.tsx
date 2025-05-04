import { UIElementDialogContent } from "../UIElementDialogContent"
import { ColumnBar } from "./bars/ColumnBar"
import { CrissCross } from "./bars/CrissCross"
import { ProgressBar } from "./bars/ProgressBar"
import { DotsGrid } from "./dots/DotsGrid"
import { Ellipsis } from "./dots/Ellipsis"
import { TrianglesToCenter } from "./dots/TrianglesToCenter"
import { CircleProgress } from "./spinners/CircleProgress"
import { CircleRegular } from "./spinners/CircleRegular"
import { CircleSpiral } from "./spinners/CircleSpiral"

export const LoadingElements = () => {
    return (
        <UIElementDialogContent>
            <CircleRegular />
            <CircleSpiral />
            <CircleProgress />

            <ProgressBar />
            <ColumnBar />
            <CrissCross />

            <DotsGrid />
            <Ellipsis />
            <TrianglesToCenter />
        </UIElementDialogContent>
    )
}