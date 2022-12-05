import SemesterComponent from './SemesterComponent'
import ThemeComponent from './ThemeComponent'
import api from '../services/api';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function CreateLesson(){
    const navigate = useNavigate()
    const location = useLocation()

    const to = location.state?.from?.pathname || '/Aulas'

    const [IdSemester,setIdSemester] = useState(location.state.idSemester)
    const [Semester,setSemester] = useState(location.state.semester)
    const [IdTheme,setIdTheme] = useState(location.state.idTheme)
    const [Theme,setTheme] = useState(location.state.theme)
    const [Titulo,setTitulo] = useState(location.state.title)
    const [Link,setLink] = useState(location.state.link)
    const [Local,setLocal] = useState(location.state.local)
    const [Data,setData] = useState(location.state.date)
    const [Descricao,setDescricao] = useState(location.state.description)

    const handleChangeTitulo = (event) => {
        setTitulo(event.target.value)
    }
    const handleChangeLink = (event) => {
        setLink(event.target.value)
    }

    const handleChangeData = (event) => {
        setData(event.target.value)
    }
    const handleChangeLocal = (event) => {
        setLocal(event.target.value)
    }

    const handleChangeDescricao = (event) => {
        setDescricao(event.target.value)
    }

    const handleChangeSemester = (event) =>{
        setSemester(event.target.value)
        setIdSemester(event.target.id)
    }

    const handleChangeTheme = (event) =>{
        setTheme(event.target.value)
        setIdTheme(event.target.id)
    }

    const handleCreateLesson = async () =>{
        try{
            const data = await api.createLesson(
                {
                    link: Link,
                    description: Descricao,
                    date: Data,
                    local: Local,
                    title: Titulo,
                    idTheme: Number(IdTheme),
                    idSemester: Number(IdSemester)
                })
                console.log(data)
                navigate(to, { replace: true })
        }
        catch(err){
            console.error(err)
        }
    }

    const handleUpdateLesson = async () =>{
        try{
            const data = await api.updateLesson(location.state.id,
                {
                    link: Link,
                    description: Descricao,
                    date: Data,
                    local: Local,
                    title: Titulo,
                    idTheme: Number(IdTheme),
                    idSemester: Number(IdSemester)
                })

                console.log(data)
                navigate(to, { replace: true })

        }
        catch(err){
            console.error(err)
        }
    }

    const handleCancelLesson = () =>{
        navigate(to, { replace: true })
    }
    return (
        <div className="p-14 rounded-3xl bg-button-color m-12 mx-auto w-[60vw] shadow-default">
            <h1 className="p-5 text-4xl mb-6">{location.state.Action} aula</h1>
            <div className="justify-between flex">
                <div className="w-[50%]">
                    <h2 className='mx-2 mb-3'>Titulo</h2>
                    <input value={Titulo} onChange={handleChangeTitulo} className="hover:bg-gray-200 block mx-auto p-2.5 w-[95%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='HTML - Aula 1'/>
                </div>
                <div className="w-[50%]">
                    <h2 className='mx-2 mb-3'>Link da aula</h2>
                    <input value={Link} onChange={handleChangeLink} className="hover:bg-gray-200 mb-4 block mx-auto p-2.5 w-[95%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='youtube.com/'/>
                </div>
            </div>
            <div className="w-[100%]">
                <h2 className='mx-2 mb-3'>Descrição</h2>
                <textarea value={Descricao} onChange={handleChangeDescricao} placeholder='Descrição da aula' className="hover:bg-gray-200 mb-4 block mx-auto w-[98%] p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" id="text" rows="10"></textarea>
            </div>
            <div className='justify-between flex mb-3'>
                <SemesterComponent handleChangeSemester={handleChangeSemester} Semester={Semester}/>
                <ThemeComponent handleChangeTheme={handleChangeTheme} Theme={Theme}/>
            </div>
            <div className="justify-between flex">
                <div className="w-[50%]">
                    <h2 className='mx-2 mb-3'>Data</h2>
                    <input value={Data} onChange={handleChangeData} className="hover:bg-gray-200 block mx-auto p-2.5 w-[95%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='01/01/2022'/>
                </div>
                <div className="w-[50%]">
                    <h2 className='mx-2 mb-3'>Local</h2>
                    <input value={Local} onChange={handleChangeLocal} className="hover:bg-gray-200 mb-4 block mx-auto p-2.5 w-[95%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder='LINF - 1 UNB'/>
                </div>
            </div>
            <div className='w-[100%] flex flex-row-reverse'>
                <button className='m-3 px-5 py-2.5 shadow-default bg-gray-color text-sm text-gray-900 rounded-lg ' onClick={location.state.Action === "Adicionar" ? handleCreateLesson : handleUpdateLesson}>{location.state.Action}</button>
                <button className='m-3 text-white px-5 py-2.5 text-sm shadow-default bg-[#A00D0D] rounded-lg ' onClick={handleCancelLesson}>Cancelar</button>
            </div>
        </div>
    );
}