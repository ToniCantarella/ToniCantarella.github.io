import NavBar from "../navigation/NavBar.tsx";
import ThemePicker from "../theme/ThemePicker.tsx";
import LanguagePicker from "../language-picker/LanguagePicker.tsx";

type TopBarProps = {
    onLogoClick: () => void;
}

export default function TopBar(props: TopBarProps) {

    return (
        <div className="sticky flex justify-center">
            <div className="flex w-[1200px] justify-between">
                <NavBar onLogoClick={props.onLogoClick}/>
                <div className="flex gap-8">
                    <ThemePicker/>
                    <LanguagePicker/>
                </div>
            </div>
        </div>
    )
}