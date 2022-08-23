import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
