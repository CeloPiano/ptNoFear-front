import Checkbox from "./Checkbox"

const UsuarioComp = ({Label}:any) => {
    return (
        <div className = "h-[66px] w-[663px] pl-[20px] pr-[40px] flex justify-between place-items-center bg-background-color rounded-md">
            <div className = "bg-transparent text-black ">
                {Label}
            </div>
            <Checkbox />
        </div>
    )
}

export default UsuarioComp