import { Link } from "react-router-dom"
import { NavigationContext, Pathnames } from "../navigation/NavigationBar"
import { useContext } from "react"
import { AppContext } from "../../App"
import "./HomeButton.scss"

export const HomeButton = () => {
    const appContext = useContext(AppContext)
    const navContext = useContext(NavigationContext)

    const onClick = () => {
        navContext.onNavClick(Pathnames.LANDING)
        appContext.playIntro()
    }

    return (
        <Link 
            key={Pathnames.LANDING}
            onClick={onClick}
            to={Pathnames.LANDING}
            className="home-button"
        >
            {`TONI: ${appContext.introPlaying}`}
        </Link>
    )
}