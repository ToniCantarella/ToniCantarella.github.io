import { Link } from "react-router-dom"
import "./Navigation.scss"
import { createContext, ReactElement, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import HomeIcon from "../../assets/home.svg?react"
import PathIcon from "../../assets/path.svg?react"
import StarIcon from "../../assets/star.svg?react"
import ContactIcon from "../../assets/message.svg?react"
import { HomeButton } from "./home-button/HomeButton"

type Page = {
  pathname: string,
  icon: ReactElement,
  title: string
}

export enum Paths {
  ABOUT_ME = "/",
  SKILLS = "/skills",
  EXAMPLES = "/examples",
  CONTACT = "/contact",
}

export const Pages: Page[] = [
  {
    pathname: Paths.ABOUT_ME,
    icon: <HomeIcon />,
    title: "about-me"
  },
  {
    pathname: Paths.SKILLS,
    icon: <PathIcon />,
    title: "skills"
  },
  {
    pathname: Paths.EXAMPLES,
    icon: <StarIcon />,
    title: "examples"
  },
  {
    pathname: Paths.CONTACT,
    icon: <ContactIcon />,
    title: "contact"
  }
]

export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)

export const NavigationBar = () => {
  return (
    <nav id="navigation-bar">
      <HomeButton />
      <NavigationItems />
    </nav>
  )
}

export const NavigationItems = (props: { icons?: boolean }) => {
  const navContext = useContext(NavigationContext)
  const { t } = useTranslation()

  return Pages.map(page =>
    <Link
      className={`navigation-item ${navContext.currentPage === page.pathname ? "selected" : ""}`}
      key={page.pathname}
      onClick={() => navContext.onNavClick(page.pathname)}
      to={page.pathname}
    >
      {props.icons && page.icon}
      <span>
        {t(`navigation.${page.title}`)}
      </span>
    </Link>
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
  const direction = (Pages.findIndex(page => page.pathname === currentPage)) < (Pages.findIndex(page => page.pathname === previousPage))

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