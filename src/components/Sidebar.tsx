import { Logo } from './Logo';
import './../assets/components/Sidebar.css'
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (
        <>
            <div className="sidebar flex flex-col w-40">

                <Logo />

                <nav className='menu mt-10 mx-4'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
                        }
                    >
                        Words list
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
                            }
                    >
                        Profile
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
                            }
                    >
                        My categories
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
                            }
                    >
                        New words
                    </NavLink>
                </nav>

            </div>
        </>
    );

}