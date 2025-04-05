import { LanguagePicker } from "../language-picker/LanguagePicker"
import { NavigationBar } from "../navigation/NavigationBar"
import { ThemePicker } from "../theme-picker/ThemePicker"
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