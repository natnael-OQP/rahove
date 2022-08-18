const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                color1: '#64ffda',
                color2: '#8892b0',
                color3: '#ccd6f6',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
