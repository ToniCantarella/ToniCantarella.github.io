import { Link } from "react-router-dom"
import "./Navigation.scss"
import { createContext, ReactElement, useContext, useState } from "react"
import { useTranslation } from "react-i18next"

type Page = {
  pathname: string,
  title: string
}

export enum Pathnames {
  LANDING = "/",
  SKILLS = "/skills",
  EXAMPLES = "/examples",
  CONTACT = "/contact",
}

const Pages: Page[] = [
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

type NavigationContextType = {
  direction: boolean,
  onNavClick: (pathname: string) => void
}

export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)

export const NavigationBar = () => {
  const navContext = useContext(NavigationContext)
  const { t } = useTranslation()

  return (
    <nav
      id="navigation-bar"
    >
      {Pages.map(page =>
        <Link
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
    onNavClick,
    direction
  }

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  )
}