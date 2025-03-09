import { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar } from "./ui/common/TopBar";
import { AnimatedRoutes } from "./ui/navigation/AnimatedRoutes";
import './App.scss'
import { ThemeContext } from "./ui/theme-picker/ThemePicker";


function App() {
  const {theme} = useContext(ThemeContext)

  return (
      <div id="app" className={theme}>
        <Router>
          <TopBar />
          <AnimatedRoutes />
        </Router>
      </div>
  )
}

export default App
