"use client";
import { createContext } from "react";
import { doNothing } from "@/helper/util";

export type TAppContext = {
    context: Record<string, any>;
    setContext?: (value: Record<string, any>) => void;
};

const defaultAppContext: TAppContext = {
    context: {},
    setContext: (value: Record<string, any>) => {
        doNothing(value);
    }
};

export const AppContext = createContext(defaultAppContext);
