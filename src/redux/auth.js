import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LoginAction: (state) => {
            state.auth = true;
        },
        LogoutAction: (state) => {
            state.auth = false;
        }

    }
});


export const { LoginAction, LogoutAction } = authSlice.actions;
export default authSlice.reducer;

