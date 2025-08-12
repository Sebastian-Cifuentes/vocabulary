export const HoverButton = ({label, clickFunction}: {label: string, clickFunction: () => void}) => {
    return (
        <>
            <p 
            onClick={clickFunction}
            className="font-semibold hover:bg-gray-200 cursor-pointer w-fit rounded-md px-5 py-2">
                {label}
            </p>
        </>
    );
};