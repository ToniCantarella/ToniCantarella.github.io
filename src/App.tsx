import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.scss'

function App() {

  return (
    <div id="app">
      <Router>
        <div
          id="navigation"
        >
          navigation
          <Link to="/">app</Link>
          <Link to="/test">test</Link>
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
