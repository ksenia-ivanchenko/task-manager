import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser, logOut, signInWithEmail, signUp } from "./actions";

type TUserState = {
    name: string;
    email: string;
    id: string;
    loading: boolean;
    isAuthChecked: boolean;
    error: string;
};

const initialState: TUserState = {
    name: null,
    email: null,
    id: null,
    loading: false,
    isAuthChecked: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthChecked = false;
            })
            .addCase(
                signUp.rejected,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.isAuthChecked = true;
                    state.email = null;
                    state.id = null;
                    state.name = null;
                }
            )
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.email = action.payload.data.user.email;
                state.id = action.payload.data.user.id;
                state.name = action.payload.data.user.user_metadata.name;
                state.isAuthChecked = true;
                state.error = null;
            });
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthChecked = false;
            })
            .addCase(
                getUser.rejected,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.isAuthChecked = true;
                    state.error = action.payload;
                    state.email = null;
                    state.id = null;
                    state.name = null;
                }
            )
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthChecked = true;
                state.email = action.payload.email;
                state.id = action.payload.id;
                state.name = action.payload.user_metadata.name;
                state.error = null;
            });
        builder
            .addCase(signInWithEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthChecked = false;
            })
            .addCase(signInWithEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "something went wrong";
                state.isAuthChecked = true;
                state.email = null;
                state.id = null;
                state.name = null;
            })
            .addCase(signInWithEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.email = action.payload.data.user.email;
                state.id = action.payload.data.user.id;
                state.name = action.payload.data.user.user_metadata.name;
                state.isAuthChecked = true;
            });
        builder
            .addCase(logOut.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuthChecked = false;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "An error occurred during logout";
            })
            .addCase(logOut.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.email = null;
                state.id = null;
                state.name = null;
                state.isAuthChecked = true;
            });
    },
    selectors: {},
});
