import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createBoardApi,
    deleteBoardApi,
    getUserBoardsApi,
    updateBoardApi,
} from "../../../services/api";
import { TCreateBoardData, TUpdateBoardData } from "../../../services/types";

export const createBoard = createAsyncThunk(
    "board/create",
    async (boardData: TCreateBoardData) => await createBoardApi(boardData)
);

export const updateBoard = createAsyncThunk(
    "board/update",
    async (boardData: TUpdateBoardData) => await updateBoardApi(boardData)
);

export const getUserBoards = createAsyncThunk(
    "boards/user",
    async (userId: string) => await getUserBoardsApi(userId)
);

export const deleteBoard = createAsyncThunk(
    "board/delete",
    async (boardId: string) => await deleteBoardApi(boardId)
);
