"use client";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "@/components/context/app-context";
import ThemeToggle from "@/components/theme-toggle";
import { AppContextReader } from "@/components/system/context-reader";

export const Home = () => {
    const { context } = useContext(AppContext);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Hello World {context.ts}</div>
            <AppContextReader className="w-128 h-32" />
            <ThemeToggle />
        </main>
    );
};

export default Home;
