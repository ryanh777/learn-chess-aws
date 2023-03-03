import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoveInfo, Orientation } from "../../@constants";
import { RootState } from "../store";

interface BoardState {
    moves: string[];
    pieces: string[];
    boardOrientation: Orientation;
}

const initialState: BoardState = {
    moves: [],
    pieces: [],
    boardOrientation: Orientation.white
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        drop: (state, action: PayloadAction<MoveInfo>) => {
            state.moves.push(action.payload.move);
            state.pieces.push(action.payload.piece)
        },
        reset: (state) => {
            state.moves = [];
            state.pieces = [];
        },
        flip: (state) => {
            state.moves = [];
            state.pieces = [];
            state.boardOrientation == Orientation.white ? 
                state.boardOrientation = Orientation.black : state.boardOrientation = Orientation.white 
        },
        undo: (state) => {
            state.moves.pop();
            state.pieces.pop();
        }
    }
})

export const { drop, reset, flip, undo } = boardSlice.actions

export const selectBoard = (state: RootState) => state.board

export default boardSlice.reducer