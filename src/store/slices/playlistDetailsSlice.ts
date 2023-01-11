import { IComment } from "@interfaces/comment.interface";
import { IPlaylist } from "@interfaces/playlist.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface playlistDetailsState {
	playlist: IPlaylist | null;
	comments: IComment[] | [];
	status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: playlistDetailsState = {
	comments: [],
	playlist: null,
	status: "idle",
};

export const fetchPlaylistById = createAsyncThunk(
	"playlistDetails/fetchPlaylist",
	async (id: string) => {
		const response = await axios.get(
			`${process.env.REACT_APP_API}/playlists.json`
		);
		return response.data.find((playlist: IPlaylist) => playlist.id == id);
	}
);

export const fetchComments = createAsyncThunk(
	"playlistDetails/fetchComments",
	async () => {
		const response = await axios.get(
			`${process.env.REACT_APP_API}/comments.json`
		);
		return response.data;
	}
);

export const playlistDetailsSlice = createSlice({
	name: "playlistDetails",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchPlaylistById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchPlaylistById.fulfilled,
				(state, action: PayloadAction<IPlaylist>) => {
					state.status = "succeeded";
					state.playlist = action.payload;
				}
			)
			.addCase(fetchPlaylistById.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(fetchComments.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchComments.fulfilled,
				(state, action: PayloadAction<IComment[]>) => {
					state.status = "succeeded";
					state.comments = action.payload;
				}
			)
			.addCase(fetchComments.rejected, (state) => {
				state.status = "failed";
			});
	},
});

// Action creators are generated for each case reducer function
export const {} = playlistDetailsSlice.actions;

export default playlistDetailsSlice.reducer;
