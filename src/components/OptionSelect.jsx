import trash from '../assets/Trash.png'
import pencil from '../assets/Pencil.png'
import api from '../services/api';
import { useState } from 'react';

export default function OptionSelect(props){
    const [isVisible,setIsVisible] = useState(true)
    
    const handleClickAndThemeDropDowm = (event) =>{
        props.handleClickDropDowm()
        props.handleChangeContent(event)
    }

    const handleClickDelete = async (event) =>{
        await props.handleDeleteContent(event)
        setIsVisible(false)
    }

    const handleClickUpdate = () => {
        props.handleClickModal(props.id)
    }

    return isVisible ? (
        <div className='flex justify-between'>
            <input id={props.id} type="button" value={props.name} onClick={handleClickAndThemeDropDowm}/>
            <div className='flex'>
                <img src={pencil} alt="editar" onClick={handleClickUpdate}/>
                <img id={props.id} src={trash} alt="excluir" onClick={handleClickDelete}/>
            </div>
        </div>
    ) : null ;
}