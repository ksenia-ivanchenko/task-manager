import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, getUserTasks } from "./actions";
import { TTask } from "../../../services/types";

type TTaskState = {
    tasks: TTask[];
    loading: boolean;
    error: string | null;
};

const initialState: TTaskState = {
    tasks: [],
    loading: false,
    error: null,
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "что-то пошло не так";
            });
        builder
            .addCase(deleteTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(
                    (task) => task.id !== action.payload
                );
                if (state.tasks === null) {
                    state.tasks = [];
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "что-то пошло не так";
            });
        builder
            .addCase(getUserTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getUserTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "что-то пошло не так";
            });
    },
    selectors: {},
});
