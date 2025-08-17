type ButtonProps = {
    label: string,
    clickFunction: () => void,
    type: "submit" | "reset" | "button" | undefined
}

export const PrimaryButton = ({label, clickFunction, type}: ButtonProps) => {
    return(
        <>
            <button
                onClick={clickFunction}
                type={type}
                className="rounded-xl bg-blue-500 hover:bg-blue-600 px-10 py-1 text-white font-semibold">
                {label}
            </button>
        </>
    );
};