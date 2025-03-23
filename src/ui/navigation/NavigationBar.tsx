import { Link } from "react-router-dom";
import "./Navigation.scss"
import { createContext, ReactElement, useContext, useState } from "react";

type Page = {
  pathname: string
}

export enum Pathnames {
  APP = "/",
  TEST="/test",
  TEST_SECOND= "/test-second",
  TEST_THIRD= "/test-third",
}

const Pages: Page[] = [
  {
    pathname: Pathnames.APP
  },
  {
    pathname: Pathnames.TEST
  },
  {
    pathname: Pathnames.TEST_SECOND
  },
  {
    pathname: Pathnames.TEST_THIRD
  }
]

type NavigationContextType = {
  direction: boolean,
  onNavClick: (pathname: string) => void
}

export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)

export const NavigationBar = () => {
  const navContext = useContext(NavigationContext)

  return (
    <div
      id="navigation-bar"
    >
      {Pages.map(page =>
        <Link key={page.pathname} onClick={() => navContext.onNavClick(page.pathname)} to={page.pathname}>{`${page.pathname}`}</Link>
      )}
    </div>
  )
}

type NavigationProviderProps = {
  children: ReactElement
}

export const NavigationProvider = (props: NavigationProviderProps) => {
  const [previousPage, setPreviousPage] = useState<string>(location.pathname)
  const [currentPage, setCurrentPage] = useState<string>(location.pathname)
  const direction = (Pages.findIndex(page => page.pathname === currentPage) ?? Pages[0]) < (Pages.findIndex(page => page.pathname === previousPage) ?? Pages[0])

  const onNavClick = (pathName: string) => {
    setPreviousPage(currentPage)
    setCurrentPage(pathName)
  }

  const animatedRouteContext = {
    onNavClick,
    direction
  }

  return (
    <NavigationContext.Provider value={animatedRouteContext}>
      {props.children}
    </NavigationContext.Provider>
  )
}