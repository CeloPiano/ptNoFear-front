import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from '../services/api'
import Modal from "./Modal";

export default function CheckButton(props){
    const { user } = useAuth()
    const [openModal,setOpenModal] = useState(false)

    const [isCheckOnly,setCheckOnly] = useState(props.isAdmin)

    const HandleChangeCheckBox = () =>{
        if(!isCheckOnly&&user.isAdmin){
            setOpenModal(true)
        }
    }

    const handleTurnInAdmin = async () =>{
        try {
            const data = await api.turnInAdmin(props.id)
            setCheckOnly(true)
            console.log(data)
        } 
        catch (err) {
            console.error(err)
        }
    }

    const handleButton = () =>{
        setOpenModal(false)
    }

    return openModal ?  (<>
        <input className="outline outline-1 outline-black accent-gray-color" type="checkbox" checked={isCheckOnly} onChange={HandleChangeCheckBox} />
        <Modal Text={"Tem certeza que deseja torna-lo administrador"} createAndUpdateContent={handleTurnInAdmin} open = {openModal} handleCancelButton={handleButton} handleConfirmButton={handleButton} title={''}/>
        </>) : (
        <input className="outline outline-1 outline-black accent-gray-color" type="checkbox" checked={isCheckOnly} onChange={HandleChangeCheckBox} />
    )

}