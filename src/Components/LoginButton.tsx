import { useRef } from "react"
import { useAuth } from "../Context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { useGoogleAuth } from "../Hooks/useGoogleAuth"

export default function LoginButton() {
    const navigate = useNavigate()
    const location = useLocation()
    const { signin }:any = useAuth()
    const ref = useRef(null)

    const from = location.state?.from?.pathname || '/'

    useGoogleAuth(ref, (response) => {
        console.log(response)
        // if (response.credential) {
        //     signin(response.credential, () => {
        //         navigate(from, { replace: true })
        //     })
        // }
    })

    return <div ref={ref} />
}