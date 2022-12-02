import { Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import Cronograma from './Pages/Cronograma'
import Header from "./Components/Header"
import Aulas from "./Pages/Aulas"
import Usuarios from "./Pages/Usuarios"
import { AuthProvider } from "./Context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
