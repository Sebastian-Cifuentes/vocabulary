import { useDispatch, useSelector } from "react-redux"
import { onCreateWord, onDeleteWord, onGetAllWords, onUpdateWord, onSetErrorMessageWord, onLoadingWords } from "../store";
import { api } from "../api/vocabulary.api";

export const useWordStore = () => {

    const { words, errorMessage, loading } = useSelector((state: any) => state.word);
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
            if (data.response?.message) throw new Error(data.message);
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

    const deleteWord = async(id: number) => {
        dispatch(onLoadingWords());
        try {
            await api.delete('/users/renew');
            dispatch(onDeleteWord(id));
        } catch (error: any) {
            dispatch(onSetErrorMessageWord(error.message));
        }
    };

    return {
        words,
        errorMessage,
        loading,
        updateWord,
        deleteWord,
        getAllUsers,
        createWord
    }

}