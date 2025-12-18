import { createSlice } from '@reduxjs/toolkit';

export const wordSlice = createSlice({
    name: 'word',
    initialState: {
        words: [],
        loading: false,
        errorMessage: undefined
    },
    reducers: {
        onGetAllWords: (state, { payload }) => {
            state.words = payload;
            state.loading = false;
            state.errorMessage = undefined;
        },
        onCreateWord: (state: any, {payload}) => {
            state.words = [...state.words, payload];
            state.loading = false;
            state.errorMessage = undefined;
        },
        onUpdateWord: (state: any, {payload}) => {
            state.words = state.words.map((word: any) => word.id === payload.id ? payload.word : word);
            state.loading = false;
            state.errorMessage = undefined;
        },
        onDeleteWord: (state, { payload }) => {
            state.words = state.words.filter((word: any) => word.id !== payload);
            state.loading = false;
            state.errorMessage = undefined;
        },
        onSetErrorMessageWord: (state, { payload }) => {
            state.words = [];
            state.loading = false;
            state.errorMessage = payload;
        },
        onLoadingWords: (state) => {
            state.words = [];
            state.loading = true;
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onGetAllWords, onCreateWord, onUpdateWord, onDeleteWord, onSetErrorMessageWord, onLoadingWords } = wordSlice.actions;