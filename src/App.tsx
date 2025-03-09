import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.scss'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PageProps = {
  name: string
}

const Page = (props: PageProps) => {

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: .3 }}
    >
      {props.name}
    </motion.div>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <Page
              name={"Application"}
            />
          }
        />
        <Route
          path='/test'
          element={
            <Page
              name={"Test"}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [darkTheme, setDarkTheme] = useState<Boolean>(true)

  return (
    <div id="app" className={`${darkTheme ? "dark-theme" : "light-theme"}`}>
      <Router>
        <div
          id="navigation"
        >
          navigation
          <Link to="/">app</Link>
          <Link to="/test">test</Link>
          <button onClick={() => setDarkTheme(!darkTheme)}>
            theme switch
          </button>
          {`${darkTheme}`}
        </div>

        <AnimatedRoutes />
      </Router>

    </div>
  )
}

export default App
