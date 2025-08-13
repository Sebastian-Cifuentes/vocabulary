import { Logo } from './Logo';
import './../assets/components/Sidebar.css'
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (
        <>
            <div className="sidebar flex flex-col bg-blue-200">

                <Logo />

                <nav className='menu mt-10 mx-4'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-semibold' : 'text-gray-500 font-semibold'
                        }
                    >
                        Words list
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500 font-semibold'
                            }
                    >
                        Profile
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500 font-semibold'
                            }
                    >
                        My categories
                    </NavLink>
                    <NavLink to={{pathname: '/profile'}}
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-semibold' : 'text-gray-500 font-semibold'
                            }
                    >
                        New words
                    </NavLink>
                </nav>

            </div>
        </>
    );

}