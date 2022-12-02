import React from "react"
import { useLocation } from "react-router-dom"

const Redirect = ({Label}:any) => {

    const destination:string = ("/" + {Label}.Label).normalize("NFD").replace(/\p{Diacritic}/gu, "")

    const location = useLocation().pathname

    function underline_if_link () {
        if (location === destination){
            return "bg-transparent underline"
        }

        return "bg-transparent"
    }
    
    return (
        <a className = "bg-transparent flex place-items-center justify-center text-black font-inter font-[400] text-[20px]" href = {destination}>
            <div className = {underline_if_link()}>

                {Label}
            </div>
        </a>

    )
}

export default Redirect