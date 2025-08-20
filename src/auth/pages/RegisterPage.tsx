import { KeyRound, Mail, User } from "lucide-react";
import { Title } from '../../components/Title';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
      navigate("/auth"); // redirects to /dashboard
    };

    return (
        <>
            <div className="register p-5 bg-white rounded-xl">
                <Title title="Register" className="mb-3" />
                <div className="relative w-full mb-5">
                    <label htmlFor="user">Name</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Username"
                        type="text"
                        id="user"/>
                    <User className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full mb-5">
                    <label htmlFor="user">Username</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Username"
                        type="text"
                        id="username"/>
                    <User className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full mb-5">
                    <label htmlFor="user">Email</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Username"
                        type="email"
                        id="email"/>
                    <Mail className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full">
                    <label htmlFor="user">Password</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Password"
                        type="password"
                        id="user"/>
                    <KeyRound className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <PrimaryButton className="mt-4" label="Sign up" clickFunction={() => console.log('signing up')} type="submit" />
                <br />
                <a onClick={navigateToLogin} className="cursor-pointer">Sign me in</a>
            </div>
        </>
    );

}