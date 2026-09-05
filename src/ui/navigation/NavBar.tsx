import { NavLink } from "react-router"

type NavBarProps = {
    onLogoClick: () => void
}

export default function NavBar(props: NavBarProps) {
    return (
        <nav className="sticky flex justify-between">
            <NavLink to="/" onClick={props.onLogoClick}>
                TC
            </NavLink>
            <ul className="flex gap-8">
                <li>
                    <NavLink to="/" viewTransition>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="experience" viewTransition>
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to="examples" viewTransition>
                        Examples
                    </NavLink>
                </li>
                <li>
                    <NavLink to="art" viewTransition>
                        Art
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contact" viewTransition>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}