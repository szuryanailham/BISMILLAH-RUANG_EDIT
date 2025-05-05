import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                Base_Color: "#7966CE",
                Second_Color: "#88DE53",
                Third_Color: "#EBEBEB",
                Fourt_Color: "#141414",
                Fifth_Color: "#4A5E71",
                Sixth_Color: "#D7D4D4",
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
