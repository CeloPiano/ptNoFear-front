import { Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import Cronograma from './Pages/Cronograma'
import Header from "./Components/Header"
import Aulas from "./Pages/Aulas"
import Usuário from "./Pages/Usuário"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/usuário" element={<Usuário />} />
      </Routes>
    </div>
  )
}

export default App
