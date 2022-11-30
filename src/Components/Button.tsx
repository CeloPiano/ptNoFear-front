const Button = ({Label}:any) => {

    return (
        <button className = "px-[24px] h-[38px] rounded-[4px] bg-button-color shadow-default flex place-items-center justify-center text-white font-inter">
            {Label}
        </button>
    );
};

export default Button;