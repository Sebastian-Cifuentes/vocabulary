interface InputProps {
    type: string,
    placeholder?: string,
    label?: string,
    register: any,
    name: string,
    rules: any,
    errors: any
};

export const Input = ({type, placeholder, label, register, rules, errors, name}: InputProps) => {

    const error = errors[name]?.message;

    return(
        <>
            <div className="mb-3">
                <small className="block text-gray-700">{label}</small>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, rules)}
                    className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-0 ${
                        error ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </>
    );
};