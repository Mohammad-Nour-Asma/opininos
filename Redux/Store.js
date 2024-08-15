import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import FormSlice from "./Slices/FormSlice";
import { AuthAPI } from "./API/AuthAPI";
import StepSlice from "./Slices/StepSlice";
import { UserApi } from "./API/UserApi";
import { PollApi } from "./API/PollApi";

const store = configureStore({
  reducer: {
    formSlice: FormSlice.reducer,
    stepSlice: StepSlice.reducer,

    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [PollApi.reducerPath]: PollApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthAPI.middleware,
      UserApi.middleware,
      PollApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
