import { Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import Cronograma from './Pages/Cronograma'
import Header from "./Components/Header"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cronograma" element={<Cronograma />} />
      </Routes>
    </div>
  )
}

export default App
