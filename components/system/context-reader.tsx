"use client";

import { CSSProperties, useContext } from "react";
import { twMerge as cn } from "tailwind-merge";
import { AppContext } from "@/components/context/app-context";

export type TAppContextReaderProps = {
    className?: string;
    style?: CSSProperties;
};

export const AppContextReader = (props: TAppContextReaderProps) => {
    const { context } = useContext(AppContext);
    const appContextJSON = JSON.stringify(context, null, 2);
    return (
        <textarea
            value={appContextJSON}
            className={cn("w-full h-full", props.className)}
        />
    );
};
