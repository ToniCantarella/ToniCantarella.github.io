import { LanguagePicker } from "../../language-picker/LanguagePicker"
import { ThemePicker } from "../../theme/theme-picker/ThemePicker"
import { NavigationBar } from "../NavigationBar"
import "./TopBar.scss"

export const TopBar = () => {
    return (
        <div id="top-bar">
            <div className="inner">
                <NavigationBar />
                <div className="controls">
                    <ThemePicker />
                    <LanguagePicker />
                </div>
            </div>
        </div>
    )
}