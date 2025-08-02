import './../assets/components/Header.css';
import { Avatar } from './Avatar';

export const Header = () => {

    return (
        <>
            <div className="header flex items-center w-100 h-12 px-6 justify-end">
                <Avatar />
            </div>
        </>
    );

}