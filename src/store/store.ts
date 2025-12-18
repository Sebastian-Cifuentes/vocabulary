import { configureStore } from "@reduxjs/toolkit";
import { authSlice, popupSlice, wordSlice } from ".";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        popup: popupSlice.reducer,
        word: wordSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;