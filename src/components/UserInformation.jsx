import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function UserInformation() {
    const { user, signout } = useAuth()
    const navigate = useNavigate()
  
    const signoutHandler = () => {
      signout(() => {
        navigate('/', { replace: true })
      })
    }
    return user ? (
        <div className="flex items-center space-x-4">
            <p className="font-black text-slate-900 hidden sm:block">
              {user.name}
            </p>
            <img
              className="w-12 h-12 rounded-full"
              src={user.picture}
              alt={`Foto de perfil de ${user.name}`}
            />
            <button
                type="button"
                className="inline-block px-6 py-2.5 bg-button-color text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                onClick={signoutHandler}
            >Sair
            </button>
        </div>
      ) : (
        <></>
      )
}