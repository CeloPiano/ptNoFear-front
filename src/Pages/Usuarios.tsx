function Usuarios () {
    return(
        <div className = "pt-[72px] flex items-center justify-center content-center">
            <div className = "bg-button-color w-[775px] h-[762px] rounded-2xl">
                <div className = "pt-[49px] px-[53px] pb-[75px] bg-transparent flex justify-between place-items-center">
                    <h1 className = "bg-transparent text-lighter-background-color text-[48px] font-inter font-400">
                        Usuários
                    </h1>
                </div>
                <div className = "bg-transparent flex justify-between px-[74px] text-lighter-background-color font-inter font-[400] text-[20px]">
                    <div className = "bg-transparent">
                        Membro
                    </div>
                    <div className = "bg-transparent">
                        Admin
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuarios