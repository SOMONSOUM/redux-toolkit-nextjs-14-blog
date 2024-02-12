"use client";

import { Children } from "react";
import { reduxStore } from "./store";
import { Provider } from "react-redux";

export function ReduxProvider({children}: {children:React.ReactNode}) {
    return <Provider store={reduxStore}>{children}</Provider>
}