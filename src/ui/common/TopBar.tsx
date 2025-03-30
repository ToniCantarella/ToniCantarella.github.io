import { HomeButton } from "../home-button/HomeButton"
import { LanguagePicker } from "../language-picker/LanguagePicker"
import { NavigationBar } from "../navigation/NavigationBar"
import { ThemePicker } from "../theme-picker/ThemePicker"
import "./TopBar.scss"

export const TopBar = () => {
    return (
        <div id="top-bar">
            <HomeButton />
            <NavigationBar />
            <LanguagePicker />
            <ThemePicker />
        </div>
    )
}