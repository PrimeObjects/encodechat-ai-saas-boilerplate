import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                mont: ["var(--font-roboto)", ...fontFamily.sans]
            }
        }
    },
    plugins: []
};
export default config;
