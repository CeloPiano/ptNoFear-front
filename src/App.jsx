import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import UsersPage from './pages/UsersPage'
import LessonPage from './pages/LessonPage'
import CreateLesson from './components/CreateLesson'
import { RequireAdmin } from './components/RequireAdmin'
import TimeLine from './pages/TimeLine'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= "Aulas">
            <Route index element={<LessonPage/>}/>
            <Route path= "CreateLesson" element = {<CreateLesson/>}/>
          </Route>
          <Route 
            path="Usuarios" 
            element={
              <RequireAdmin>
                <UsersPage/>
              </RequireAdmin>
              }
          />
          <Route path="Cronograma" element={<TimeLine/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
