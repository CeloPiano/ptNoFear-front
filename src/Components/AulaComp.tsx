const AulaComp = ({Label}:any) => {
    return(
        <div className="bg-transparent inline-block w-[300px] shadow-default">
            <div className = "bg-button-color rounded-t-lg h-[54px] shadow-inherit flex justify-between place-items-center px-[15px] font-inter text-[20px] font-[400] text-white">
                {Label}
            </div>
            <div className = "bg-lighter-background-color h-[300px] shadow-inherit px-[15px] py-[16px] font-inter font-[400] text-[15px] text-[#284b63]">
                <div className = "bg-transparent">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </div>
                <a href = "#" className = "bg-transparent underline">link</a>
            </div>
            <div className = "bg-button-color rounded-b-lg h-[47px] shadow-inherit flex justify-between place-items-center px-[15px] font-inter text-[14px] font-[400] text-white">
                <div className = "bg-transparent">
                    01/01/2022
                </div>
                <div className = "bg-transparent">
                    LINF - UNB
                </div>

            </div>
        </div>
    )
}

export default AulaComp