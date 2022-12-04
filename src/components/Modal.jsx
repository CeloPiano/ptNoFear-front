import { useState } from "react";

function Teste(props){
    return (
        <input
            className='text-black'
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
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.title.length > 0 ? <Teste Content={Content} HandleChangeText={HandleChangeText}/>: props.Text}
                </div>
                <div className="modalfooter">
                    <input type="button" value="Cancelar" onClick={props.handleCancelButton}/>
                    <input type="button" value={props.title.length > 0 ? props.title.split(' ')[0] : "Confirmar"} onClick={handleConfirm}/>
                </div>
            </div>

        </div>
    );
}