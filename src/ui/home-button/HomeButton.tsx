import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../navigation/NavigationBar"
import { useContext } from "react"
import { AppContext } from "../../App"
import "./HomeButton.scss"

export const HomeButton = () => {
    const appContext = useContext(AppContext)
    const navContext = useContext(NavigationContext)

    const onClick = () => {
        navContext.onNavClick(Paths.ABOUT_ME)
        appContext.playIntro()
    }

    return (
        <Link 
            key={Paths.ABOUT_ME}
            onClick={onClick}
            to={Paths.ABOUT_ME}
            id="home-button"
            className="navigation-item"
        >
            <div>
                T C
            </div>
        </Link>
    )
}