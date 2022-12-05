import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Spinner from './Spinner'

export function RequireAdmin({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user.isAdmin) {
    return <Navigate to="/Aulas" state={{ from: location }} replace />
  }

  return children
}