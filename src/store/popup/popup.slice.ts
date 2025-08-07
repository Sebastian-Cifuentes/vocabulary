import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopupState } from "../../interfaces";

const initialState: PopupState = {
    isOpen: false,
    content: null,
    title: '',
    size: 'medium'
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        onOpenPopup: (state, {payload}: PayloadAction<PopupState>) => {
            state.isOpen = true;
            state.title = payload.title;
            state.content = payload.content;
            state.size = payload.size;
        },
        onClosePopup: (state) => {
            state.isOpen = false;
            state.title = '';
            state.content = null;
            state.size = 'medium';
        } 
    }
});

export const { onOpenPopup, onClosePopup } = popupSlice.actions;