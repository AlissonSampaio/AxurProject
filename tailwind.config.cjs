/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*/.{js,ts,jsx,tsx}",
        "./src/routes/.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,tsx,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};