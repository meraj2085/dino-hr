import { getFromLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const localStorageTheme = getFromLocalStorage("theme");
const theme = localStorageTheme ? JSON.parse(localStorageTheme) : null;

const initialState = {
  theme: theme?.theme ? theme?.theme : "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = configSlice.actions;

export default configSlice.reducer;
