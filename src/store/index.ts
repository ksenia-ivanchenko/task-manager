import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsSlice, tasksSlice, userSlice } from "./slices";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [boardsSlice.name]: boardsSlice.reducer,
    [tasksSlice.name]: tasksSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
