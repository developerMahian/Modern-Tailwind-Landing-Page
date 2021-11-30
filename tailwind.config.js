module.exports = {
    purge: {
        enabled: true,
        content: ["./public/index.html", "./public/app.js", "./src/style.css"],
        options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "bookmark-purple": "#5267DF",
                "bookmark-red": "#e45252",
                "bookmark-black": "#242A45",
                "bookmark-grey": "#6b6c72",
                "bookmark-white": "#f7f7f7",
            },
        },
        fontFamily: {
            Poppins: ["Poppins, sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
