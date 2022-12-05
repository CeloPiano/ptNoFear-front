import { useAuth } from "../contexts/AuthContext";
import Pencil from "../assets/PencilWhite.png";
import Trash from "../assets/TrashWhite.png";
import api from '../services/api';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AulaComponent(props){
    const {user} = useAuth()
    const navigate = useNavigate()

    const [isVisible,setIsVisible] = useState(true)

    const handleDeleteLesson = async (event) =>{
        try {
            const data = await api.deleteLesson(event.target.id)
            setIsVisible(false)
            console.log(data)
        } 
        catch (err) {
            console.error(err)
        }
    }

    const handleEditLesson = async (event) => {
        try {
            const data = await api.getLesson(event.target.id)
            const Theme = await api.getTheme(data.idTheme)
            const Semester = await api.getSemester(data.idSemester)
            console.log(data)
            navigate("CreateLesson",{state: {id:event.target.id, Action:'Editar',idSemester:Semester.id,semester:Semester.name,idTheme:Theme.id,theme:Theme.name,title:data.title,link:data.link,local:data.local,date:data.date.slice(0,10),description:data.description}, replace: true })
        } 
        catch (err) {
            console.error(err)
        }
    }

    return isVisible ? (
        <div className="flex justify-between flex-col font-inter font-[400] h-[400px] w-[300px] bg-transparent rounded-b-lg inline-block shadow-default">
            <div className = "p-2 flex justify-between bg-button-color rounded-t-lg shadow-inherit text-[20px] text-white">
                <h2>{props.title}</h2>
                {user.isAdmin ? <div className="flex"><img onClick={handleEditLesson} id={props.id} src={Pencil} alt="editar"/><img onClick={handleDeleteLesson} id={props.id} src={Trash} alt="excluir"/></div> : null}
            </div>
            <div className = "p-2 h-[100%] bg-lighter-background-color shadow-inherit text-[15px] text-[#284b63]">
                {props.description}
                <a href = {props.link} className='underline block'>link</a>
            </div>
            <div className = "p-1 bg-button-color rounded-b-lg shadow-inherit flex justify-between place-items-center text-[14px] text-white">
                <div>
                    {props.date.slice(0, 10)}
                </div>
                <div>
                    {props.local}
                </div>
            </div>
        </div>
    ): null;
}