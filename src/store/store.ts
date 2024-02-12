import { configureStore } from "@reduxjs/toolkit";
import allArtclesSlice from "./slices/allArtclesSlice";

export const reduxStore = configureStore({
    reducer: {
        articles: allArtclesSlice,
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;
