import DropDowm from "./DropDowm";
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';
import Modal from "./Modal";
import PlusCircle from '../assets/PlusCircle.png'


export default function SemesterComponent(props){
    const [Semesters,setSemesters] = useState(null)
    const [openModal,setOpenModal] = useState(false)
    const [Title,setTitle] = useState('')
    const [idUpdate,setIdUpdate] = useState(0)

    const handleGetOptions = async () =>{
        const data = await api.getSemesters()
        setSemesters(data)
    }

    const handleClickModal = (id=0) =>{
        if(typeof id === "number"){
            setTitle("Editar Semestre")
            setIdUpdate(id)
        }
        else{
            setTitle("Adicionar Semestre")
            setIdUpdate(0)
        }
        setOpenModal(true)
    }

    const createAndUpdateSemester = async (Semester) => {
        if(Semester.length > 0){
            try {
                const data = idUpdate !== 0 ? await api.updateSemester(idUpdate,Semester) : await api.createSemester(Semester) 
                console.log(data)
            } 
            catch (err) {
                console.error(err)
            }
        }
    }

    const handleDeleteSemester = async (event) =>{
        try {
            const data = await api.deleteSemester(event.target.id)
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

    return Semesters ? (
        <div className="mx-2 w-[100%]">
            <div className="mb-3 flex justify-between">
                <h2>Semestre</h2>
                <button onClick={handleClickModal} ><img src={PlusCircle} alt="botão de adicionar"/></button>
            </div>
            {openModal ? (<Modal createAndUpdateContent={createAndUpdateSemester} open = {openModal} handleCancelButton={handleCancelButton} handleConfirmButton={handleConfirmButton} title={Title}/>) : null}
            <DropDowm handleDeleteContent={handleDeleteSemester} handleClickModal={handleClickModal} handleChangeContent={props.handleChangeSemester} Content={props.Semester} ListContent = {Semesters} PlaceHolder ={"Escolha o Semestre"}/>
        </div>
    ) : null 
}