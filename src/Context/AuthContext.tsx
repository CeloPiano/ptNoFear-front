import { createContext, useContext, useState, useEffect } from "react"
import api from "../Services/Api"

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }:any) {
    const [user, setUser] = useState(Boolean)

    const signin = async (credential:any, callback:any) => {
        try {
            const { user, expires_in} = await api.login(credential)
            const TIMETOREFRESH = expires_in * 1000 - 5000

            setUser(user)
            setTimeout(refreshToken, TIMETOREFRESH)
            callback()
        } catch(error) {
            console.error(error)
            alert("Falha no login, tente novamente")
        }
    }

    const signout = async (callback:any) => {
        try {
            await api.logout()
            setUser(false)
            callback()
        } catch (error) {
            console.error(error)
        }
    }

    const refreshToken = async () => {
        try {
            const { expires_in } = await api.refrestToken()
            const user = await api.getCurrentUser()
            const TIMETOREFRESH = expires_in * 1000 - 5000

            setUser(user)
            setTimeout(refreshToken, TIMETOREFRESH)
        } catch(error) {
            console.error(error)
            setUser(false)
        }
    }

    useEffect(() => {
        refreshToken()
    }, [])

    const value = { user, signin, signout }
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}
