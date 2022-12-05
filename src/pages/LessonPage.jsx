import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState,useEffect } from 'react'
import api from '../services/api'
import FilterSemester from '../components/FilterSemester'
import Spinner from '../components/Spinner'
import { useMemo } from 'react'
import AulaComponent from '../components/AulaComponent'

export default function LessonPage(){
    const {user} = useAuth()
    const [Lessons,setLessons] = useState(null)
    const [Semesters,setSemesters] = useState(null)
    const [CurrentChoice,setCurrentChoice] = useState(0)

    const handleCurrentChoice = (event) => {
        setCurrentChoice(Number(event.target.id))
    }

    const fetchLessonsInfo = async () => {
        try {
            const data = await api.getLessons()
            const secundaryData = await api.getSemesters()
            setLessons(data)
            setSemesters(secundaryData)
          } 
          catch (err) {
            setLessons(null)
            setSemesters(null)
            console.error(err)
          }
    }

    useEffect(() => {
        fetchLessonsInfo();
    },[])

    const LessonsRows = useMemo(() => {
        const rows = []
        for (let i = 0; i < Lessons?.length; i += 3) {
          rows.push(Lessons.slice(i, i+3))
        }
    
        return rows
    }, [Lessons])

    

    return Semesters&&Lessons ? (    
        user.isAdmin ? (
            <div className="mx-auto flex justify-between flex-col h-[88vh] w-[100vw]">
                <main>
                    <div className="w-[70vw] mx-auto flex justify-between items-start">
                        <FilterSemester  handleCurrentChoice={handleCurrentChoice} Semesters={Semesters}/>
                    </div>
                    <div className="w-[100vw]">
                        {
                            LessonsRows.map((element,index) => {
                                return (
                                    <div className='my-5 flex justify-center space-x-14' key={index}>
                                        {element.map((element,index) => {
                                            if(CurrentChoice === 0||CurrentChoice === element.idSemester){
                                                return <AulaComponent key={index} {...element}/>
                                            }
                                        })}
                                    </div>
                                );
                            })
                        }
                    </div>
                </main>
                <footer className="w-[70vw] mx-auto flex flex-row-reverse pb-5">
                        <Link to="CreateLesson" state={{Action:'Adicionar',idSemester:0,semester:'Escolha o Semestre',idTheme:0,theme:'Escolha o Tema',title:'',link:'',local:'',date:'',description:''}}>
                            <button className="bg-button-color shadow-default p-1 rounded">Adicionar Aula</button>
                        </Link> 
                </footer>
            </div>
        ) : null
    ) : <Spinner/>
}