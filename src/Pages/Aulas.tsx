import AulaComp from "../Components/AulaComp"
import AulaTipo from "../Components/AulaTipo"
import Button from "../Components/Button"
import SemestreDropdown from "../Components/SemestreDropdown"

function Aulas () {
    return(
        <div className = "flex flex-col py-[72px]">
            <div className= "flex justify-center gap-x-[45px] place-items-center">
                <SemestreDropdown Label = "Semestre"/>
                <AulaTipo />
            </div>
            <div className = "bg-transparent pr-[53.5%] p-[97px] flex justify-center">
                <Button Label = "Duvidas" />
            </div>
            <div className = "bg-transparent flex justify-center gap-x-[70px]">
                <AulaComp Label = "Aula X"/>
                <AulaComp Label = "Aula Y"/>
                <AulaComp Label = "Aula Z"/>
            </div>
        </div>
    )
}

export default Aulas