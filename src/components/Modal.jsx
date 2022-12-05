import { useState } from "react";

function Input(props){
    return (
        <input
            className='border-solid border-2 border-gray-400 p-2 text-black w-[100%]'
            type="text"
            value={props.Content}
            placeholder='Escreva aqui'
            onChange={props.HandleChangeText} 
        />
    )
}

export default function Modal(props){
    const [Content,setContent] = useState('')

    const HandleChangeText = (event) => {
        setContent(event.target.value)
    }
    
    const handleConfirm = async () =>{
        props.title.length > 0 ? await props.createAndUpdateContent(Content) : await props.createAndUpdateContent()
        props.handleConfirmButton()   
    }

    return (
        <div className="modal text-black">
            <div className="absolute w-[350px] h-[180px] left-[500px] top-[240px] bg-[#EDEDE9] shadow-default rounded-xl">
                <div className="p-5">
                    <h4 className="">{props.title}</h4>
                </div>
                <div className="w-[100%] px-5">
                    {props.title.length > 0 ? <Input Content={Content} HandleChangeText={HandleChangeText}/>: props.Text}
                </div>
                <div className="p-5 w-[100%] flex justify-between">
                    <button onClick={props.handleCancelButton} className="rounded px-5 py-1 text-white shadow-default bg-[#A00D0D]">Cancelar</button>
                     <button onClick={handleConfirm} className="rounded px-5 py-1 shadow-default bg-[#C9CBCE]">{props.title.length > 0 ? props.title.split(' ')[0] : "Confirmar"}</button>
                </div>
            </div>

        </div>
    );
}