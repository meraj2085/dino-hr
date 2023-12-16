import { baseApi } from "./api/baseApi";
import configReducer from "./slices/configSlice";
import userReducer from "./slices/userSlice";

export const reducer = {
  config: configReducer,
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
