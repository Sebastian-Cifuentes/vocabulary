import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    loadWords,
    createWord,
    updateWord,
    deleteWord,
  } from './word.thunk';

export interface Word {
    id: string;
    name: string;
}

interface WordState {
    words: Word[];
    loading: boolean;
    errorMessage?: string;
}

const initialState: WordState = {
    words: [],
    loading: false,
    errorMessage: undefined,
};

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        clearWordError: state => {
            state.errorMessage = undefined;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadWords.pending, state => {
                state.loading = true;
            })
            .addCase(loadWords.fulfilled, (state, action: PayloadAction<Word[]>) => {
                state.words = action.payload;
                state.loading = false;
                state.errorMessage = undefined;
            })
            .addCase(loadWords.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });

        builder
            .addCase(createWord.pending, state => {
                state.loading = true;
            })
            .addCase(createWord.fulfilled, (state, action: PayloadAction<Word>) => {
                state.words.push(action.payload);
                state.loading = false;
            })
            .addCase(createWord.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });

        builder
            .addCase(updateWord.pending, state => {
                state.loading = true;
            })
            .addCase(updateWord.fulfilled, (state, action: PayloadAction<Word>) => {
                const index = state.words.findIndex(w => w.id === action.payload.id);
                if (index !== -1) {
                    state.words[index] = action.payload;
                }
                state.loading = false;
            })
            .addCase(updateWord.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });

        builder
            .addCase(deleteWord.pending, state => {
                state.loading = true;
            })
            .addCase(deleteWord.fulfilled, (state, action: PayloadAction<string>) => {
                state.words = state.words.filter(w => w.id !== action.payload);
                state.loading = false;
            })
            .addCase(deleteWord.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });           
    }
    // reducers: {
    //     onGetAllWords: (state, { payload }) => {
    //         state.words = payload;
    //         state.loading = false;
    //         state.errorMessage = undefined;
    //     },
    //     onCreateWord: (state: any, {payload}) => {
    //         state.words = [...state.words, payload];
    //         state.loading = false;
    //         state.errorMessage = undefined;
    //     },
    //     onUpdateWord: (state: any, {payload}) => {
    //         state.words = state.words.map((word: any) => word.id === payload.id ? payload.word : word);
    //         state.loading = false;
    //         state.errorMessage = undefined;
    //     },
    //     onDeleteWord: (state, { payload }) => {
    //         state.words = state.words.filter((word: any) => word.id !== payload);
    //         state.loading = false;
    //         state.errorMessage = undefined;
    //     },
    //     onSetErrorMessageWord: (state, { payload }) => {
    //         state.loading = false;
    //         state.errorMessage = payload;
    //     },
    //     onLoadingWords: (state) => {
    //         state.loading = true;
    //         state.errorMessage = undefined;
    //     }
    // }
});


// Action creators are generated for each case reducer function
export const { clearWordError } = wordSlice.actions;
export default wordSlice.reducer;