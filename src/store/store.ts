import { configureStore } from "@reduxjs/toolkit";
import playlistDetailsReducer from "@store/slices/playlistDetailsSlice";
import playlistsReducer from "@store/slices/playlistsSlice";
import userReducer from "@store/slices/userSlice";

export const store = configureStore({
	reducer: {
		playlists: playlistsReducer,
		playlistDetails: playlistDetailsReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
