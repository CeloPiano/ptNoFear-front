import { useState } from "react"
import CaretDown from "../assets/CaretDownBlack.png"

export default function FilterSemester(props){
    const [ContentCarrot,setContentCarrot] = useState("Semestre")
    const [Open,setOpen] = useState("hidden")

    const handleOpenDropDowm = () => {
        if(Open === "hidden")
            setOpen("")
        else{
            setOpen("hidden")
        }
    }

    const handleChangeSemester = (event) => {
        props.handleCurrentChoice(event)
        setContentCarrot(event.target.name)
        setOpen("hidden")
    }

    return (
        <div className="border border-gray-900 rounded-lg w-[14%] mt-5 p-1 text-black h-[50%] bg-gray-color shadow-default">
            <button onClick={handleOpenDropDowm} className="w-[100%] flex justify-between text-black ">
                {ContentCarrot} 
                <img src={CaretDown} alt="botao"/> 
            </button>
            <div className={Open+" w-[100%] flex flex-row-reverse"}>
                <div className="w-[100%]">
                    <div className="w-[100%] hover:bg-gray-400 border border-gray-900">
                        <button name={"Semestre"} onClick={handleChangeSemester} id={0} className="w-[100%] text-center">
                            All
                        </button>
                    </div>
                    {props.Semesters.map((element,index) => (
                        <div key={index} className="w-[100%] hover:bg-gray-400 border border-gray-900">
                            <button name={element.name} onClick={handleChangeSemester} id={element.id} className="w-[100%] text-center">
                                {element.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}