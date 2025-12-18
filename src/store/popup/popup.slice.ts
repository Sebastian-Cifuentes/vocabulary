import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopupState } from "../../interfaces";

const initialState: PopupState = {
    isOpen: false,
    type: '',
    props: null,
    title: '',
    size: 'medium',
    error: ''
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        onOpenPopup: (state, {payload}: PayloadAction<PopupState>) => {
            state.isOpen = true;
            state.title = payload.title;
            state.type = payload.type;
            state.props = payload.props;
            state.size = payload.size;
            state.error = payload.error;
        },
        onClosePopup: (state) => {
            state.isOpen = false;
            state.title = '';
            state.type = '';
            state.props = null;
            state.size = 'medium';
            state.error = '';
        },
        onSetPopupError: (state, { payload }) => {
            state.error = payload.error;
        }
    }
});

export const { onOpenPopup, onClosePopup, onSetPopupError } = popupSlice.actions;