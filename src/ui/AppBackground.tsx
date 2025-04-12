import { FrutigerAeroBackground } from "./theme-background/FrutigerAeroBackground";
import { ThemeNames } from "./theme-picker/ThemePicker";


export const Background = (props: { theme: string }) => {

    const background = () => {
        switch (props.theme) {
            case ThemeNames.FRUTIGER_AERO:
                return <FrutigerAeroBackground />
                break;
        }
    }

    return (
        <div id="app-background">
            {background()}
        </div>
    )
}