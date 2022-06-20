import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Link } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/react'>React应用</Link>
        <Link to='/vue'>Vue应用</Link>
      </Router>
      <div id='container'></div>
    </div>
  )
}

export default App
