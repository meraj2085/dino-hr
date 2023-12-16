import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: {
      firstName: "",
      lastName: "",
    },
    _id: "",
    email: "",
    mobileNumber: "",
    id: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
