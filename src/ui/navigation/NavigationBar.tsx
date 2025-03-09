import { Link } from "react-router-dom";

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

/*<button onClick={() => setDarkTheme(!darkTheme)}>
theme switch
</button>
{`${darkTheme}`}*/