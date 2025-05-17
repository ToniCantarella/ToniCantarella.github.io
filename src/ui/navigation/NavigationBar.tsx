import { Link, useLocation } from "react-router-dom"
import "./Navigation.scss"
import { createContext, ReactElement, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import HomeIcon from "../../assets/home.svg?react"
import HomeIconOutlined from "../../assets/homeoutlined.svg?react"
import PathIcon from "../../assets/path.svg?react"
import PathIconOutlined from "../../assets/pathoutlined.svg?react"
import StarIcon from "../../assets/star.svg?react"
import StarIconOutlined from "../../assets/staroutlined.svg?react"
import ContactIcon from "../../assets/message.svg?react"
import ContactIconOutlined from "../../assets/messageoutlined.svg?react"
import { HomeButton } from "./home-button/HomeButton"
import { AppContext } from "../../App"

type Page = {
	pathname: string,
	selectedIcon: ReactElement,
	unSelectedIcon: ReactElement,
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
		selectedIcon: <HomeIcon />,
		unSelectedIcon: <HomeIconOutlined />,
		title: "about-me"
	},
	{
		pathname: Paths.SKILLS,
		selectedIcon: <PathIcon />,
		unSelectedIcon: <PathIconOutlined />,
		title: "skills"
	},
	{
		pathname: Paths.EXAMPLES,
		selectedIcon: <StarIcon />,
		unSelectedIcon: <StarIconOutlined />,
		title: "examples"
	},
	{
		pathname: Paths.CONTACT,
		selectedIcon: <ContactIcon />,
		unSelectedIcon: <ContactIconOutlined />,
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
	const location = useLocation()
	const appContext = useContext(AppContext)
	const navContext = useContext(NavigationContext)
	const { t } = useTranslation()

	return Pages.map(page => {
		const selected = location.pathname === page.pathname
		return (
			<Link
				className={`navigation-item ${selected ? "selected" : ""}`}
				key={page.pathname}
				onClick={() => {
					navContext.onNavClick(page.pathname)
					if (props.icons && page.pathname === Paths.ABOUT_ME && selected) {
						appContext.playIntro()
					}
				}}
				to={page.pathname}
			>
				{props.icons && (
					selected
						? page.selectedIcon
						: page.unSelectedIcon
				)}
				<span>
					{t(`navigation.${page.title}`)}
				</span>
			</Link>
		)
	})
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