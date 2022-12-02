import PLACEHOLDER from "../Assets/PLACEHOLDER.png"
import Button from "./Button"
import Logo from "../Assets/Logo.png"
import Redirect from "./Redirect"

const Header = () => {
    return(
        <div className="w-[100%] h-[78px] bg-white shadow-default flex justify-between items-center">
            <div className = "bg-transparent">
                <a href = "/" className = "bg-transparent">
                    <img src = {Logo} alt = "CJR SOPT Logo" className = "bg-transparent mx-2"/>
                </a>
            </div>
            <div className = "bg-transparent flex gap-x-[26px]">
                <Redirect Label = "Aulas"/>
                <Redirect Label = "Cronograma"/>
                <Redirect Label = "Usuários"/>
            </div>
            <div className = "bg-transparent flex place-items-center mx-3">
                <div className = "bg-transparent font-inter font-[600]">
                    Jonas S. Rangel
                </div>
                <img src = {PLACEHOLDER} alt = "Placeholder" className = "object-fill h-[53px] w-[53px] rounded-full mx-2"/>
                <Button Label = "Sair"/>
            </div>
        </div>
    )
}

export default Header