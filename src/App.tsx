import { createContext, useContext, useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import './App.scss'
import "./ui/theme/theme-styles/DarkTheme.scss"
import "./ui/theme/theme-styles/LightTheme.scss"
import { AppContent } from "./ui/AppContent"
import { BottomBar } from "./ui/navigation/bottom-bar/BottomBar"
import { ThemeContext } from "./ui/theme/theme-picker/ThemePicker"
import { TopBar } from "./ui/navigation/top-bar/TopBar"
import { Intro } from "./ui/intro/Intro"
import { useTranslation } from "react-i18next"
import winterImage from "./assets/winter.jpg"
import motorbikeImage from "./assets/motorbike.jpg"
import torchImage from "./assets/torch.jpg"
import contactImage from "./assets/cup.jpg"
import noiseGradient from "./assets/noiseGradient.jpg"

type AppContextType = {
	firstRender: boolean,
	introPlaying: boolean,
	setIntroPlaying: (introPlaying: boolean) => void,
	playIntro: () => void
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const preloadImages = (urls: string[]) => {
	return Promise.all(
		urls.map(url => {
			const img = new Image();
			img.src = url;
			return img.decode()
		})
	)
}

function App() {
	const { theme } = useContext(ThemeContext)
	const { t } = useTranslation()
	const firstRenderKey = "first-time-render"
	const firstRender: boolean = JSON.parse(localStorage.getItem(firstRenderKey) ?? "true")
	const [introPlaying, setIntroPlaying] = useState<boolean>(firstRender)

	useEffect(() => {
		if (firstRender) {
			localStorage.clear()
			localStorage.setItem(firstRenderKey, JSON.stringify(false))
		}

		preloadImages([
			winterImage,
			motorbikeImage,
			torchImage,
			contactImage
		])
	}, [])

	const playIntro = () => {
		setIntroPlaying(true)
	}

	const appContext = {
		firstRender,
		introPlaying,
		setIntroPlaying,
		playIntro
	}

	return (
		<AppContext.Provider value={appContext}>
			<div id="app" className={theme}>
				<img src={noiseGradient} id="background-image"/>
				<Router basename="/">
					{introPlaying && <Intro />}
					<div id="app-bar">
						<div id="app-banner">🚧 {t("under-construction")} 🚧</div>
						<TopBar />
					</div>
					<AppContent />
					<BottomBar />
				</Router>
			</div>
		</AppContext.Provider>
	)
}

export default App
