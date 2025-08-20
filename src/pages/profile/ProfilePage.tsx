import { KeyRound, Mail, User } from "lucide-react";
import { PrimaryButton, Title } from "../../components";

export const ProfilePage = () => {
    return (
        <>
            <div className="p-5 bg-white rounded-xl lg:w-4/12 mx-auto">
                <Title title="Update my info" className="mb-3" />
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
                <div className="relative w-full mb-5">
                    <label htmlFor="user">New password</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="New password"
                        type="password"
                        id="user"/>
                    <KeyRound className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <div className="relative w-full">
                    <label htmlFor="user">New password again</label>
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="New password again"
                        type="password"
                        id="user"/>
                    <KeyRound className="w-7 h-7 absolute right-3 top-11 -translate-y-1/2 p-1" />
                </div>
                <PrimaryButton className="mt-4" label="Save" clickFunction={() => console.log('saving data...')} type="submit" />
            </div>
        </>
    );
};