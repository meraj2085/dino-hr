import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "@/utils/localStorage";
interface ConfigState {
  theme: string;
  employee: Record<string, any>;
}

const localStorageTheme = getFromLocalStorage("theme");
const theme = localStorageTheme ? JSON.parse(localStorageTheme) : null;

const initialState: ConfigState = {
  theme: theme?.theme ? theme.theme : "light",
  employee: {},
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setEmployee: (state, action: PayloadAction<Record<string, any>>) => {
      state.employee = action.payload;
    },
  },
});

export const { setTheme, setEmployee } = configSlice.actions;

export default configSlice.reducer;
