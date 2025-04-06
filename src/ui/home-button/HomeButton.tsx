import { Link } from "react-router-dom"
import { NavigationContext, Pathnames } from "../navigation/NavigationBar"
import { useContext } from "react"
import { AppContext } from "../../App"
import "./HomeButton.scss"

export const HomeButton = () => {
    const appContext = useContext(AppContext)
    const navContext = useContext(NavigationContext)

    const onClick = () => {
        navContext.onNavClick(Pathnames.ABOUT_ME)
        appContext.playIntro()
    }

    return (
        <Link 
            key={Pathnames.ABOUT_ME}
            onClick={onClick}
            to={Pathnames.ABOUT_ME}
            id="home-button"
            className="navigation-item"
        >
            <div>
                T C
            </div>
        </Link>
    )
}