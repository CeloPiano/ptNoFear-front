const Checkbox = ({ label }:any) => {
    return (
        <>
            <label>
                <span>{label}</span>
                <input type="checkbox" />
            </label>
        </>
    );
};

export default Checkbox;