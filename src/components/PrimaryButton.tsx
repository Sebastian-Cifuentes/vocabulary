export const PrimaryButton = ({name, clickFunction}: {name: string, clickFunction: () => void}) => {
    return(
        <>
            <button
                onClick={clickFunction}
                className="rounded-xl bg-blue-500 hover:bg-blue-600 px-10 text-white font-semibold">
                {name}
            </button>
        </>
    );
};