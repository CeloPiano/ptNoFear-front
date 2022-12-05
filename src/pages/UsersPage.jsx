import api from '../services/api'
import TableUser from '../components/TableUser'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../components/Spinner'

export default function UsersPage(){
    const [Users,setUsers] = useState(null)

    const fetchUsersInfo = async () => {
        
        try {
            const data = await api.getUsers()
            setUsers(data)
          } 
          catch (err) {
            setUsers(null)
            console.error(err)
          }
    }

    useEffect(() => {
        fetchUsersInfo();
      },[])
    
    return Users ? (<TableUser Users ={Users}/>) : <Spinner/>
}