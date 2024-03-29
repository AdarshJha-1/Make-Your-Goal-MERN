import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice.js";
import goalReducer from '../features/goals/goals.slice.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  },
});
