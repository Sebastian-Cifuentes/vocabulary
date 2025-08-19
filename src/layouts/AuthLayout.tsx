import { Outlet } from 'react-router-dom';
import { Logo } from '../components';
export const AuthLayout = () => {
    return (
        <>
            <div className="flex flex-col w-4/12 justify-center items-center h-lvh w-full bg-gray-100 pb-52">
                <Logo />
                <Outlet />
            </div>
        </>
    );
};