import { NavigationBar } from "../navigation/NavigationBar"
import { ThemePicker } from "../theme-picker/ThemePicker"
import "./TopBar.scss"

export const TopBar = () => {
    return (
        <div id="top-bar">
            <NavigationBar />
            <ThemePicker />
        </div>
    )
}