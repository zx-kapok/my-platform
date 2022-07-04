import "./App.css"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Layout } from "antd"
import "./index.css"
import MyHeader from "./components/MyHeader"

const { Header, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <Content>
          <div id="container"></div>
        </Content>
      </Layout>
    </div>
  )
}

export default App
