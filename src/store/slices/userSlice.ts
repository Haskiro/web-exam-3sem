import { IUser } from "@interfaces/user.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
	user: IUser;
}

const initialState: UserState = {
	user: {
		name: "Павел",
		surname: "Кондратьев",
		bio: "Создатель этого музыкального приложения",
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		editUserData: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { editUserData } = userSlice.actions;

export default userSlice.reducer;
