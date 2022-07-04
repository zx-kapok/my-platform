import React, { useState, useEffect } from "react"
import { Button } from "antd"
import "./index.css"
import { BrowserRouter as Router, Link } from "react-router-dom"
import logo from "../../logo.svg"

const MyHeader = () => {
  const [pathname, setPathname] = useState("")
  useEffect(() => {
    console.log(window.location.pathname, "location")
    setPathname(window.location.pathname)
  }, [])
  return (
    <div className="header-container">
      <div className="logo-content">
        <img src={logo} alt="logo" />
        <span>我的应用</span>
      </div>
      <div className="header-nav">
        <Router>
          <Link
            to="/react"
            className={pathname == "/react" ? "header-nav-item active" : "header-nav-item"}
          >
            React应用
          </Link>
          <Link
            to="/vue"
            className={pathname == "/vue" ? "header-nav-item active" : "header-nav-item"}
          >
            Vue应用
          </Link>
        </Router>
      </div>
      <div className="user-info">一个小盆友</div>
    </div>
  )
}

export default MyHeader
