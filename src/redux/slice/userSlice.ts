import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  email: string | null;
  name: string | null;
  id: string | null;
}

const initialState: IUserState = {
  email: null,
  name: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
