import SemestreDropdown from "../Components/SemestreDropdown"
import CronoComp from "../Components/CronoComp"

function Cronograma () {
    return(
        <div className = "py-[72px] flex items-center justify-center content-center">
            <div className = "box-content rounded-2xl bg-button-color h-[762px] w-[775px] shadow-default flex flex-col">
                <div className = "p-[53px] bg-transparent flex justify-between place-items-center">
                    <h1 className = "bg-transparent text-lighter-background-color text-[48px] font-inter font-400">
                        Cronograma
                    </h1>
                    <div className = "bg-transparent flex justify-center content-center">
                        <SemestreDropdown Label = "Semestre"/>
                    </div>
                </div>
                <div className = "bg-transparent flex flex-row justify-around font-inter font-[400] text-[20px] text-lighter-background-color">
                    <div className = "bg-transparent">
                        Aula
                    </div>
                    <div className = "bg-transparent">
                        Local
                    </div>
                    <div className = "bg-transparent">
                        Data
                    </div>
                </div>
                <div className = "bg-transparent flex justify-center">
                    <div className = "bg-transparent flex flex-col">
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                        <div className= "bg-transparent my-[10px]">
                            <CronoComp/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cronograma