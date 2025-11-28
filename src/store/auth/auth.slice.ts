import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '../../enum/AuthStatus.enum';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: AuthStatus.checking,
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = AuthStatus.authenticated;
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = AuthStatus.notauthenticated;
            state.user = {};
            state.errorMessage = payload;
        },
        onChecking: (state) => {
            state.status = AuthStatus.checking;
            state.user = {};
            state.errorMessage = undefined;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking, clearErrorMessage } = authSlice.actions;