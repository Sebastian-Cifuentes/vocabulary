interface InputProps {
    type: string,
    placeholder?: string,
    label?: string,
    className?: string,
    register: any,
    name: string,
    rules: any,
    errors: any
};

export const Input = ({type, placeholder, label, register, rules, errors, name, className}: InputProps) => {

    const error = errors[name]?.message;

    return(
        <>
            <div className="mb-3">
                <label htmlFor={name}><small className="block text-gray-700">{label}</small></label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, rules)}
                    className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-0 ${
                        error && "border-red-500"
                      } ${className}`}
                    />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </>
    );
};