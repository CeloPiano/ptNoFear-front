import { useState } from 'react'
import OptionSelect from './OptionSelect'
import CaretDown from '../assets/CaretDown.png'

export default function DropDowm(props){
    const [DropOn,setDropOn] = useState("hidden")

    const handleClickDropDowm = () => {
        if(DropOn.length > 0){
            setDropOn("")
        }
        else{
            setDropOn("hidden")
        }
    }

    return (
        <div className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300">
            <button 
                onClick={handleClickDropDowm} 
                id="dropdownDefault" 
                className={props.Content === props.PlaceHolder ? 
                ("text-gray-400 w-[100%] justify-between hover:bg-gray-200 focus:outline-none  font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex") 
                :("text-black w-[100%] justify-between hover:bg-gray-200 focus:outline-none font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex")} type="button">
                {props.Content}
                <img src={CaretDown} alt="caret down"/>
            </button>
            <div id="dropdown" className={DropOn+" bg-gray-color shadow-default place-content-center place-items-center outline outline-1 outline-black"}>
                <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
                    {props.ListContent.map((Element)=>(
                        <OptionSelect 
                            handleClickModal ={props.handleClickModal}
                            key ={Element.id} 
                            id = {Element.id}
                            name = {Element.name} 
                            handleDeleteContent = {props.handleDeleteContent}
                            handleChangeContent ={props.handleChangeContent}
                            handleClickDropDowm={handleClickDropDowm}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}