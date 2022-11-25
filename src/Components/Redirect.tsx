const Redirect = ({Label}:any) => {
    const destination:string = "/" + {Label}.Label
    return (
        <a className = "bg-transparent flex place-items-center justify-center text-black font-inter font-[400] text-[20px] mx-[13px]" href = {destination}>
            {Label}
        </a>

    );
};

export default Redirect;