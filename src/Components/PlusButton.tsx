const PlusButton = () => {
    return (
        <>
            <button className = "box-content w-[71px] h-[71px] bg-button-color rounded-full flex justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="flex justify-center items-center">
                    <div className = "box-content bg-white w-[22px] h-[2px] absolute flex justify-center" />
                    <div className = "box-content bg-white w-[2px] h-[22px] absolute flex justify-center" />
                </div>
            </button>
        </>
    )
}

export default PlusButton