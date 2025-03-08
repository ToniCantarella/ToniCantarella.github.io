import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.scss'
import { useState } from "react";

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
        </div>

        <Routes>
          <Route path='/' element={ <div>Application</div> }/>
          <Route path='/test' element={ <div>test</div> }/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
