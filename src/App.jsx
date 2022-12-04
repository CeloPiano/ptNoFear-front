import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import UsersPage from './pages/UsersPage'
import LessonPage from './pages/LessonPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LessonPage/>}/>
          <Route path="/Usuarios" element={<UsersPage/>}/>
          <Route path="/Cronograma" element={<h1>Pagina Cronograma</h1>}/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
