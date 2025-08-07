import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/store';
import { onClosePopup, onOpenPopup } from "../store";
import { PopupState } from '../interfaces';

export const usePopupStore = () => {
    const { content, isOpen, title, size } = useSelector((state: RootState) => state.popup);
    const dispatch = useDispatch();

    const openPopup = ({title, content, size}: PopupState) => {
        dispatch(onOpenPopup({title, content, size}));
    };

    const closePopup = () => {
        dispatch(onClosePopup());
    };

    return {
        isOpen,
        content,
        title,
        size,
        openPopup,
        closePopup
    };

};