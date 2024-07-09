import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    email: string;
}

const initialState: UserState = {
    username: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails(state, action: PayloadAction<UserState>) {
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        clearUserDetails(state) {
            state.username = '';
            state.email = '';
        },
    },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;