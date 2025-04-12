import { createContext, useContext, useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { TopBar } from "./ui/top-bar/TopBar"
import { ThemeContext } from "./ui/theme-picker/ThemePicker"
import { Intro } from "./ui/intro/Intro"
import { Background } from "./ui/AppBackground"
import './App.scss'
import "./ui/theme-styles/DarkTheme.scss"
import "./ui/theme-styles/LightTheme.scss"
import "./ui/theme-styles/FrutigerAero.scss"
import { AppContent } from "./ui/AppContent"
import { BottomBar } from "./ui/bottom-bar/BottomBar"

type AppContextType = {
  firstRender: boolean,
  introPlaying: boolean,
  setIntroPlaying: (introPlaying: boolean) => void,
  playIntro: () => void
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

function App() {
  const { theme } = useContext(ThemeContext)
  const firstRender: boolean = JSON.parse(localStorage.getItem("first-render") ?? "true")
  const [introPlaying, setIntroPlaying] = useState<boolean>(firstRender)

  useEffect(() => {
    if (firstRender) {
      localStorage.setItem("first-render", JSON.stringify(false))
    }
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
        <Background
          theme={theme}
        />
        <Router>
          {introPlaying && <Intro />}
          <TopBar />
          <AppContent />
          <BottomBar />
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App
