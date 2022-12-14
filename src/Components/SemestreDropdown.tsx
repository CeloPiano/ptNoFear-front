import React from "react";

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
        <div className="bg-background-color flex h-[33px] w-[140px] rounded-full shadow-default place-content-center">
            <div className = "bg-transparent relative inline-block">
                <button onClick={show_dropdown} className="bg-transparent self-center font-inter text-[20px] font-[400]">
                    {Label}
                </button>
                <div ref = {dropdown_ref} className="absolute hidden flex-col">
                    <a href = "#">2019/1</a>
                    <a href = "#">2019/2</a>
                    <a href = "#">2020/1</a>
                </div>
            </div>
        </div>
    )
}

export default SemestreDropdown