type ButtonProps = {
    label: string,
    clickFunction: () => void,
    type: "submit" | "reset" | "button" | undefined,
    className?: string
}

export const PrimaryButton = ({label, clickFunction, type, className}: ButtonProps) => {
    return(
        <>
            <button
                onClick={clickFunction}
                type={type}
                className={`rounded-xl bg-blue-500 hover:bg-blue-600 px-10 py-1 text-white font-semibold ${className}`}>
                {label}
            </button>
        </>
    );
};