import { useState } from "react"
import TableRow from "./TableRow"
import FilterSemester from "./FilterSemester"


export default function TableLesson(props){
    const [CurrentChoice,setCurrentChoice] = useState(0)

    const tabelaLesson = props.Lessons.map((element,index) =>{
        if(CurrentChoice === 0||CurrentChoice === element.idSemester){
            return <TableRow 
                key={index} 
                content = {{
                    content1: element.title,
                    content2: element.local,
                    content3: element.date.slice(0, 10)
                }} 
            />
        }
    })

    const handleCurrentChoice = (event) => {
        setCurrentChoice(Number(event.target.id))
    }

    console.log(CurrentChoice)

    return (
        <div className="p-10 rounded-3xl bg-button-color m-12 mx-auto w-[60vw] shadow-default">
            <div className="w-[100%] flex justify-between items-end">
                <h1 className="m-4 text-4xl">Cronograma</h1>
                <FilterSemester handleCurrentChoice={handleCurrentChoice} Semesters={props.Semesters}/>
            </div>
            <table className="w-[100%]">
            <thead>
                <tr className="mt-14 mx-8 flex justify-between ">
                    <th>Aula</th>
                    <th>Local</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {tabelaLesson}
            </tbody>
        </table>
        </div>
    )
} 