import { KeyRound, User } from "lucide-react";
import { PrimaryButton, Title } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from '../../components/form/Input';
import { useAuthStore } from "../../hooks";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { startLogin } = useAuthStore();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigateToRegister = () => {
      navigate("/auth/register");
    };

    const login = (data: any) => {
        startLogin(data);
    };

    return (
        <>
            <div className="login p-6 bg-white rounded-xl sm:w-4/4 md:w-1/4">
                <Title title="Sing in" className="mb-3" />
                <div className="relative w-full mb-5">
                    <Input
                        type='text'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Username or email' 
                        register={register}
                        rules={{
                            required: 'Username or email is required',
                            // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='user'
                        errors={errors}
                    />
                    <User className="w-7 h-7 absolute right-3 top-5 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full">
                    <Input
                        type='password'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Password' 
                        register={register}
                        rules={{
                            required: 'Password is required',
                            // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='password'
                        errors={errors}
                    />
                    <KeyRound className="w-7 h-7 absolute right-3 top-5 -translate-y-1/2 p-1" />
                </div>
                <PrimaryButton className="mt-4" label="Sign in" clickFunction={handleSubmit(login)} type="submit" />
                <br />
                <a onClick={navigateToRegister} className="cursor-pointer">Sign me up</a>
            </div>
        </>
    );

}