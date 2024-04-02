import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./slice/careerSlice";
import contactReducer from "./slice/contactSlice";
import profileReducer from "./slice/profileSlice";

const store = configureStore({
    reducer: {
        career: careerReducer,
        contact: contactReducer,
        profile: profileReducer,
    },
});

export default store;