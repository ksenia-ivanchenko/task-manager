import { createSlice } from "@reduxjs/toolkit";
import {
    createBoard,
    deleteBoard,
    getUserBoards,
    updateBoard,
} from "./actions";
import { TBoard } from "../../../services/types";

type TBoardsState = {
    boards: TBoard[];
    loading: boolean;
    error: string | null;
};

const initialState: TBoardsState = { boards: [], loading: false, error: null };

export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBoard.fulfilled, (state, action) => {
                state.boards.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(createBoard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(getUserBoards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserBoards.fulfilled, (state, action) => {
                state.boards = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getUserBoards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        builder
            .addCase(updateBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateBoard.fulfilled, (state, action) => {
                const updatedBoard = action.payload;
                const boardIndex = state.boards.findIndex(
                    (board) => board.id === updatedBoard.id
                );
                if (boardIndex !== -1) {
                    state.boards[boardIndex] = updatedBoard;
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(updateBoard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(deleteBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteBoard.fulfilled, (state, action) => {
                console.log(action.payload);
                state.boards = state.boards.filter(
                    (board) => board.id !== action.payload
                );
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteBoard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
    selectors: {},
});
