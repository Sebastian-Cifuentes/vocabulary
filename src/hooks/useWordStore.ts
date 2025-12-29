import { useDispatch, useSelector } from "react-redux"
import { createWord, deleteWord, loadWords, updateWord } from "../store/word/word.thunk";
import { AppDispatch, clearWordError, Word } from "../store";
import { useCallback } from "react";

export const useWordStore = () => {

    const { words, errorMessage, loading } = useSelector((state: any) => state.word);
    const dispatch = useDispatch<AppDispatch>();

    const loadAllWords = useCallback(() => {
        dispatch(loadWords());
    }, [dispatch]);
    
    const create = useCallback(
        (payload: { text: string }) => dispatch(createWord(payload)).unwrap(),
        [dispatch]
    );

    const update = useCallback(
        (word: Word) => dispatch(updateWord(word)),
        [dispatch]
    );

    const remove = useCallback(
        (id: string) => dispatch(deleteWord(id)),
        [dispatch]
    );

    const clearError = useCallback(
        () => dispatch(clearWordError()),
        [dispatch]
    );

    return {
        words,
        errorMessage,
        loading,
        loadAllWords,
        create,
        update,
        remove,
        clearError
    }

}