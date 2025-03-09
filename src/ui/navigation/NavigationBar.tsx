import { Link } from "react-router-dom";
import "./Navigation.scss"

export const NavigationBar = () => {

    return (
        <div
          id="navigation-bar"
        >
          navigation
          <Link to="/">app</Link>
          <Link to="/test">test</Link>
        </div>
    )
}