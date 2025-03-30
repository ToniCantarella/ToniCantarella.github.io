import { HomeButton } from "../home-button/HomeButton"
import { LanguagePicker } from "../language-picker/LanguagePicker"
import { NavigationBar } from "../navigation/NavigationBar"
import { ThemePicker } from "../theme-picker/ThemePicker"
import "./TopBar.scss"

export const TopBar = () => {
    return (
        <div id="top-bar">
            <div className="inner">
                <div className="sub-section navigation">
                    <HomeButton />
                    <NavigationBar />
                </div>
                <div className="sub-section controls">
                    <LanguagePicker />
                    <ThemePicker />
                </div>
            </div>
        </div>
    )
}