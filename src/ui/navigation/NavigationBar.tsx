import { Link } from "react-router-dom"
import "./Navigation.scss"
import { createContext, ReactElement, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { HomeButton } from "../home-button/HomeButton"

type Page = {
  pathname: string,
  title: string
}

export enum Pathnames {
  ABOUT_ME = "/",
  SKILLS = "/skills",
  EXAMPLES = "/examples",
  CONTACT = "/contact",
}

const Pages: Page[] = [
  {
    pathname: Pathnames.ABOUT_ME,
    title: "about-me"
  },
  {
    pathname: Pathnames.SKILLS,
    title: "skills"
  },
  {
    pathname: Pathnames.EXAMPLES,
    title: "examples"
  },
  {
    pathname: Pathnames.CONTACT,
    title: "contact"
  }
]

export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)

export const NavigationBar = () => {
  const navContext = useContext(NavigationContext)
  const { t } = useTranslation()

  return (
    <nav id="navigation-bar">
      <HomeButton />

      {Pages.map(page =>
        <Link
          className={`navigation-item ${navContext.currentPage === page.pathname ? "selected" : ""}`}
          key={page.pathname}
          onClick={() => navContext.onNavClick(page.pathname)}
          to={page.pathname}
        >
          {t(`navigation.${page.title}`)}
        </Link>
      )}
    </nav>
  )
}

type NavigationContextType = {
  direction: boolean,
  currentPage: string,
  onNavClick: (pathname: string) => void
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

  const navigationContext = {
    direction,
    currentPage,
    onNavClick
  }

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  )
}