interface InputProps {
    type: string,
    placeholder: string,
    label?: string,
    register: any,
};

export const Input = ({type, placeholder, label}: InputProps) => {
    return(
        <>
            <div className="mb-3">
                <small className="block text-gray-700">{label}</small>
                <input className="rounded w-full focus:outline-none focus:ring-0" type={type} placeholder={placeholder} />
            </div>
        </>
    );
};