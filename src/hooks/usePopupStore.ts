import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/store';
import { onClosePopup, onOpenPopup, onSetPopupError } from "../store";
import { PopupState } from '../interfaces';

export const usePopupStore = () => {
    const { type, props, isOpen, title, size, error } = useSelector((state: RootState) => state.popup);
    const dispatch = useDispatch();

    const openPopup = ({title, type, props, size}: PopupState) => {
        dispatch(onOpenPopup({title, type, props, size}));
    };

    const closePopup = () => {
        dispatch(onClosePopup());
    };

    const setError = (error: string) => {
        dispatch(onSetPopupError({error}));
    };

    return {
        isOpen,
        type,
        props,
        title,
        size,
        error,
        openPopup,
        closePopup,
        setError
    };

};