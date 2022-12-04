import { Outlet } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import LoginPage from '../pages/LoginPage'
import { useAuth } from '../contexts/AuthContext'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import UserInformation from './UserInformation'

export default function Layout() {
  const { user } = useAuth()

  return (
    <>
      {
      user === null ? <Spinner /> : user ? 
      ( <>
        <header className="w-[100%] h-[12vh] bg-white shadow-default flex justify-between items-center text-black">
          <img src={Logo} className="w-auto p-5" />
          <div>
            <NavLink to="/" end className="p-5" style={({ isActive })=>({textDecoration: isActive ? 'underline':'none'})}>
              Aulas
            </NavLink>
            <NavLink to="/Cronograma" className="p-5" style={({ isActive })=>({textDecoration: isActive ? 'underline':'none'})}>
              Cronograma
            </NavLink>
            <NavLink to="/Usuarios" className="p-5" style={({ isActive })=>({textDecoration: isActive ? 'underline':'none'})}>
              Usuários
            </NavLink>
          </div>
          <div className="p-5">
            <UserInformation />
          </div>
        </header>
        <main className='w-[100%]'>
          <Outlet />
        </main>
        </> 
      ) : <LoginPage/>
      }
    </>
  )
}
