import React from "react"

const SemestreDropdown = ({Label}:any) => {

    const dropdown_ref:React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    function show_dropdown () {
        if (dropdown_ref.current!.style.display = "flex") {
            dropdown_ref.current!.style.display = "hidden"
        }
        else {
            dropdown_ref.current!.style.display = "flex"
        }
    }

    return(
        <div className="bg-background-color flex h-[33px] w-[140px] rounded-full shadow-default place-content-center place-items-center outline outline-1 outline-black">
            <div className = "bg-transparent relative inline-block">
                <button onClick={show_dropdown} className="bg-transparent self-center font-inter text-black text-[20px] font-[400]">
                    {Label}
                </button>
                <div className="flex justify-center bg-transparent">
                    <div ref = {dropdown_ref} className="absolute hidden flex-col shadow-default outline outline-1 outline-darker-background-color bg-lighter-background-color">
                        <a className = "w-[110px] flex justify-center bg-inherit" href = "#">2019/1</a>
                        <a className = "w-[110px] flex justify-center bg-inherit"  href = "#">2019/2</a>
                        <a className = "w-[110px] flex justify-center bg-inherit"  href = "#">2020/1</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SemestreDropdown