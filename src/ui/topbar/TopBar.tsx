import NavBar from "../navigation/NavBar.tsx";
import ThemePicker from "../theme/ThemePicker.tsx";
import LanguagePicker from "../language-picker/LanguagePicker.tsx";

type TopBarProps = {
    onLogoClick: () => void;
}

export default function TopBar(props: TopBarProps) {

    return (
        <div className="sticky flex justify-between border-2 border-purple-500-200">
            <NavBar onLogoClick={props.onLogoClick} />
            <ThemePicker />
            <LanguagePicker />
        </div>
    )
}