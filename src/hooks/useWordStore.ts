import { useDispatch, useSelector } from "react-redux"
import { onCreateWord, onDeleteWord, onGetAllWords, onUpdateWord, onSetErrorMessageWord, onLoadingWords } from "../store";
import { api } from "../api/vocabulary.api";

export const useWordStore = () => {

    const { words } = useSelector((state: any) => state.word);
    const dispatch = useDispatch();

    const getAllUsers = async() => {
        dispatch(onLoadingWords());

        try {
            const { data }: any = await api.get('/words');
            if (data.message) throw new Error(data.message);
            dispatch(onGetAllWords(data.words));
        } catch (error: any) {
            dispatch(onSetErrorMessageWord(error.message))
        }
    }

    const createWord = async(info: any) => {
        dispatch(onLoadingWords());

        try {
            const { data }: any = await api.post('/words', info);
            if (data.message) throw new Error(data.message);
            dispatch(onCreateWord(data.word));
        } catch (error: any) {
            dispatch(onSetErrorMessageWord(error.message))
        }
    }

    const updateWord = async(info: any, id: number) => {
        dispatch(onLoadingWords());

        try {
            const { data }: any = await api.put(`/words/${id}`, info);
            if (data.message) throw new Error(data.message);
            dispatch(onUpdateWord({word: data.word, id}));
        } catch (error: any) {
            dispatch(onSetErrorMessageWord(error.message))
        }
    };

    const deleteWord = async() => {
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
        words,
        updateWord,
        deleteWord,
        getAllUsers,
        createWord
    }

}