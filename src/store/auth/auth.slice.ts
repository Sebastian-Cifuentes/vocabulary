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

        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { clearErrorMessage } = authSlice.actions;