import { configureStore } from "@reduxjs/toolkit";
import playlistDetailsReducer from "@store/slices/playlistDetailsSlice";
import playlistsReducer from "@store/slices/playlistsSlice";

export const store = configureStore({
	reducer: {
		playlists: playlistsReducer,
		playlistDetails: playlistDetailsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
