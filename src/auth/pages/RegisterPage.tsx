import { KeyRound, Mail, User } from "lucide-react";
import { Title } from '../../components/Title';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigateToLogin = () => {
      navigate("/auth"); // redirects to /dashboard
    };

    return (
        <>
            <div className="register p-6 bg-white rounded-xl sm:w-4/4 md:w-1/4">
                <Title title="Register" className="mb-3" />
                <div className="relative w-full mb-5">
                    <Input
                        type='text'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Name' 
                        label='Name' 
                        register={register}
                        rules={{
                            required: 'Name is required',
                            // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='name'
                        errors={errors}
                    />
                    <User className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full mb-5">
                    <Input
                        type='text'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Username' 
                        label='Username' 
                        register={register}
                        rules={{
                            required: 'Username is required',
                            // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='username'
                        errors={errors}
                    />
                    <User className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full mb-5">
                    <Input
                        type='text'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Email' 
                        label='Email' 
                        register={register}
                        rules={{
                            required: 'Email is required',
                            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='email'
                        errors={errors}
                    />
                    <Mail className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full">
                    <Input
                        type='text'
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder='Password' 
                        label='Password' 
                        register={register}
                        rules={{
                            required: 'Password is required',
                            // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                        }}
                        name='password'
                        errors={errors}
                    />
                    <KeyRound className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <PrimaryButton className="mt-4" label="Sign up" clickFunction={() => console.log('signing up')} type="submit" />
                <br />
                <a onClick={navigateToLogin} className="cursor-pointer">Sign me in</a>
            </div>
        </>
    );

}