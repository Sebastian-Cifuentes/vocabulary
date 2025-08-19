import { KeyRound, User } from "lucide-react";

export const LoginPage = () => {

    return (
        <>
            <div className="login p-8 bg-white rounded-xl">
                <div className="relative w-full mb-5">
                    <label htmlFor="user">Username or email</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Username or email"
                        type="text"
                        id="user"/>
                    <User className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full">
                    <label htmlFor="user">Password</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Pssword"
                        type="password"
                        id="user"/>
                    <KeyRound className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>

            </div>
        </>
    );

}