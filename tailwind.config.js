const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './resources/js/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
