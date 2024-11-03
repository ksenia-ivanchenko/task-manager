import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createTaskApi,
    deleteTaskApi,
    getBoardTasksApi,
    getUserTasksApi,
    updateTaskApi,
} from "../../../services/api";
import { TCreateTaskData, TUpdateTaskData } from "../../../services/types";

export const createTask = createAsyncThunk(
    "task/create",
    async (taskData: TCreateTaskData) => createTaskApi(taskData)
);

export const updateTask = createAsyncThunk(
    "task/update",
    async ({ id, taskData }: { id: string; taskData: TUpdateTaskData }) =>
        await updateTaskApi(id, taskData)
);

export const deleteTask = createAsyncThunk(
    "task/delete",
    async (id: string) => await deleteTaskApi(id)
);

export const getUserTasks = createAsyncThunk(
    "tasks/user",
    async (userId: string) => await getUserTasksApi(userId)
);

export const getBoardTasks = createAsyncThunk(
    "tasks/board",
    async (boardId: string) => await getBoardTasksApi(boardId)
);
