import { NavLink } from "react-router"

type NavBarProps = {
    onLogoClick: () => void
}

export default function NavBar(props: NavBarProps) {
    return (
        <nav className="flex gap-60">
            <NavLink to="/" onClick={props.onLogoClick}>
                TC
            </NavLink>
            <ul className="flex gap-8">
                <li>
                    <NavLink to="/">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="experience">
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to="examples">
                        Examples
                    </NavLink>
                </li>
                <li>
                    <NavLink to="art">
                        Art
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}