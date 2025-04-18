import { Link } from "react-router-dom"
import { useContext } from "react"
import "./HomeButton.scss"
import { AppContext } from "../../../App"
import { NavigationContext, Paths } from "../NavigationBar"

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