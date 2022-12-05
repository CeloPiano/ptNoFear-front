import DropDowm from "./DropDowm";
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';
import Modal from "./Modal";
import PlusCircle from '../assets/PlusCircle.png'


export default function ThemeComponent(props){
    const [Themes,setThemes] = useState(null)
    const [openModal,setOpenModal] = useState(false)
    const [Title,setTitle] = useState('')
    const [idUpdate,setIdUpdate] = useState(0)

    const handleGetOptions = async () =>{
        try{
            const data = await api.getThemes()
            setThemes(data)
        } catch(err){
            console.error(err)
        }
    }

    const handleClickModal = (id=0) =>{
        if(typeof id === "number"){
            setTitle("Editar Tema")
            setIdUpdate(id)
        }
        else{
            setTitle("Adicionar Tema")
            setIdUpdate(0)
        }
        setOpenModal(true)
    }

    const createAndUpdateTheme = async (Theme) => {
        if(Theme.length > 0){
            try {
                const data = idUpdate !== 0 ? await api.updateTheme(idUpdate,Theme) : await api.createTheme(Theme) 
                console.log(data)
            } 
            catch (err) {
                console.error(err)
            }
        }
    }

    const handleDeleteTheme = async (event) =>{
        try {
            const data = await api.deleteTheme(event.target.id)
            console.log(data)
        } 
        catch (err) {
            console.error(err)
        }
    }

    const handleConfirmButton = () =>{
        handleGetOptions()
        setOpenModal(false)
    }

    const handleCancelButton = () =>{
        setOpenModal(false)
    }

    useEffect(() =>{
        handleGetOptions()
    },[])

    return Themes ? (
        <div className="mx-2 w-[100%]">
            <div className="mb-3 flex justify-between">
                <h2>Tema</h2>
                <button onClick={handleClickModal} ><img src={PlusCircle} alt="botão de adicionar"/></button>
            </div>
            {openModal ? (<Modal createAndUpdateContent={createAndUpdateTheme} open = {openModal} handleCancelButton={handleCancelButton} handleConfirmButton={handleConfirmButton} title={Title}/>) : null}
            <DropDowm handleDeleteContent={handleDeleteTheme} handleClickModal={handleClickModal} handleChangeContent={props.handleChangeTheme} Content={props.Theme} ListContent = {Themes} PlaceHolder ={"Escolha o Tema"}/>
        </div>
    ) : null 
}