/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./public/**/*.html",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        screens: {
            sm: "576px",
            // => @media (min-width: 576px) { ... }

            md: "960px",
            // => @media (min-width: 960px) { ... }

            lg: "1440px",
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            fontFamily: {
                kanit: ["var(--font-kanit)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};