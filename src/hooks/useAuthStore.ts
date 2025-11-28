import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout } from "../store";
import { api } from "../api/vocabulary.api";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({user, password}: any) => {
        dispatch(onChecking());

        try {
            const { data }: any = await api.post('/users/login', { user, password });
            if (data.message) throw new Error(data.message);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(onLogin(data.user));
        } catch (error: any) {
            dispatch(onLogout(error.message))
        }
    }

    const startCreate = async(info: any) => {
        dispatch(onChecking());

        try {
            const { data }: any = await api.post('/users/create', info);
            if (data.message) throw new Error(data.message);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(onLogin(data.user));
        } catch (error: any) {
            dispatch(onLogout(error.message))
        }
    }

    const startLogout = () => {
        localStorage.removeItem('token');
        dispatch(onLogout(errorMessage));
    };

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout(''));
        try {
            const { data }: any = await api.get('/users/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(onLogin(data.user));
        } catch (error: any) {
            localStorage.removeItem('token');
            const err = error.response.data.errormessage;
            dispatch(onLogout(err || ''));
        }
    };

    return {
        status,
        user,
        errorMessage,

        startLogin,
        startCreate,
        startLogout,
        checkAuthToken
    }

}