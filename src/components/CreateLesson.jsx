import SemesterComponent from './SemesterComponent'
import ThemeComponent from './ThemeComponent'
import { useState } from 'react'

export default function CreateLesson(){
    const [IdSemester,setIdSemester] = useState(0)
    const [Semester,setSemester] = useState('Escolha o Semestre')
    const [IdTheme,setIdTheme] = useState(0)
    const [Theme,setTheme] = useState('Escolha o Tema')

    const handleChangeSemester = (event) =>{
        setSemester(event.target.value)
        setIdSemester(event.target.id)
    }

    const handleChangeTheme = (event) =>{
        setTheme(event.target.value)
        setIdTheme(event.target.id)
    }

    return (
        <div className="p-10 rounded-3xl bg-button-color m-5 mx-auto w-[60vw] shadow-default">
            <h1 className="p-5">Adicionar Aula</h1>
            <div className="justify-between flex">
                <div className="w-[50%]">
                    <h2>Titulo</h2>
                    {/*colocar alguma coisa aqui*/}
                </div>
                <div className="w-[50%]">
                    <h2>Link da Aula</h2>
                    {/*colocar alguma coisa aqui*/}
                </div>
            </div>
            <div className="w-[100%]">
                <h2>Descrição</h2>
                {/*colocar alguma coisa aqui*/}
            </div>
            <div className='w-[100%] justify-between flex'>
                <SemesterComponent handleChangeSemester={handleChangeSemester} Semester={Semester}/>
                <ThemeComponent handleChangeTheme={handleChangeTheme} Theme={Theme}/>
            </div>
        </div>
    );
}