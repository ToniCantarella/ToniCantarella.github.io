import {NavLink, useLocation} from "react-router"
import {type Route, routes} from "./Navigation.tsx";
import {useTranslation} from "react-i18next";

type NavBarProps = {
    onLogoClick: () => void
}

export default function NavBar(props: NavBarProps) {
    const location = useLocation()
    const {t} = useTranslation()

    return (
        <nav className="flex gap-60">
            <NavLink to="/" onClick={props.onLogoClick}>
                TC
            </NavLink>
            <ul className="flex gap-8">
                {routes.map((route: Route) => {
                    const selected = location.pathname === route.path

                    return (
                        <li key={route.path}>
                            <NavLink
                                to={route.path}
                                className={`transition-colors duration-300 hover:text-primary ${selected ? 'text-primary' : ''}`}
                            >
                                {t(`navigation.${route.label}`)}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}