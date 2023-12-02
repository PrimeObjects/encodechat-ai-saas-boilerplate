"use client";

import { twMerge as cn } from "tailwind-merge";
import { ThemeProvider } from "@/components/theme-provider";
import { AppContext } from "@/components/context/app-context";
import { useContext, useState } from "react";

export type TAppWrapperProps = {
    children: any;
};

export const AppWrapper = (props: TAppWrapperProps) => {
    const [context, setContext] = useState<Record<string, any>>({});

    return (
        <AppContext.Provider value={{ context }}>
            <ThemeProvider
                disableTransitionOnChange
                attribute="class"
                defaultTheme="system"
                enableSystem
            >
                <button
                    className="p-2 border"
                    onClick={() => setContext({ ts: Date.now() })}
                >
                    Change State
                </button>
                {props.children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};
