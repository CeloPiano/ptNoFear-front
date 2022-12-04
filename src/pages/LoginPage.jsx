import Classroom from '../assets/Classroom.png'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { useGoogleAuth } from '../hooks/useGoogleAuth'

export default function LoginButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()
  const ref = useRef(null)

  const from = location.state?.from?.pathname || '/'

  useGoogleAuth(ref, (response) => {
    if (response.credential) {
      signin(response.credential, () => {
        navigate(from, { replace: true })
      })
    }
  })

  return (

    <>
    <div className="w-[100vw] h-[100vh]">
      <img src = {Classroom} alt="Classroom" className="mx-auto p-10 h-[60vh]"/>
      <h1 className="font-inter text-[100px] font-[100] italic text-center pt-0 p-16">SOPT</h1>
      <div className= "mx-auto flex w-[230px]" ref={ref}></div>
    </div>
    </>

  )

}
