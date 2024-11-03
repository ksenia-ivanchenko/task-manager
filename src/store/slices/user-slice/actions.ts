import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getProfileDataApi,
    getUserApi,
    logOutApi,
    signInWithEmailApi,
    signUpApi,
    updateUserApi,
} from "../../../services/api";
import {
    TEmailLoginData,
    TRegisterData,
    TUpdateUserData,
} from "../../../services/types";
import { AuthResponse, User } from "@supabase/supabase-js";

export const signUp = createAsyncThunk<
    AuthResponse,
    TRegisterData,
    { rejectValue: string }
>("user/signUp", async (authData: TRegisterData, { rejectWithValue }) => {
    const response = await signUpApi(authData);
    if (response.error) {
        return rejectWithValue(response.error.message);
    }
    return response;
});

export const signInWithEmail = createAsyncThunk<
    AuthResponse,
    TEmailLoginData,
    { rejectValue: string }
>("user/signInEmail", async (authData, { rejectWithValue }) => {
    try {
        const response = await signInWithEmailApi(authData);
        if (response.error) throw response.error;
        return response;
    } catch (error) {
        return rejectWithValue(error.message || "something went wrong");
    }
});

export const updateUser = createAsyncThunk(
    "user/update",
    async (updateData: TUpdateUserData) => await updateUserApi(updateData)
);

export const getUser = createAsyncThunk<User, void, { rejectValue: string }>(
    "user/getUser",
    async (_, { rejectWithValue }) => {
        try {
            return await getUserApi();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk<
    string | null,
    void,
    { rejectValue: string }
>("user/logout", async (_, { rejectWithValue }) => {
    try {
        const errorMessage = await logOutApi();
        if (errorMessage) throw new Error(errorMessage);
        return null;
    } catch (error) {
        return rejectWithValue(error.message || "something went wrong");
    }
});

export const getProfileData = createAsyncThunk(
    "user/profileData",
    async (userId: string) => await getProfileDataApi(userId)
);
