import api from '../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../components/Spinner'
import TableLesson from '../components/TableLesson'

export default function TimeLine(){
    const [Lessons,setLessons] = useState(null)
    const [Semesters,setSemesters] = useState(null)

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

    return Lessons&&Semesters ? (<TableLesson Lessons ={Lessons} Semesters = {Semesters}/>) : <Spinner/>
}