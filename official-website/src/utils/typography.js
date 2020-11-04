import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Raleway", "sans-serif"],
    bodyFontFamily: ["Raleway", "sans-serif"],
    googleFonts: [
        {
            name: "Heebo",
            styles: ["800","400"],
        },
        {
            name: "Nunito",
            styles: ["700"],
        },
        {
            name: "Cairo",
            styles: ["400", "600"],
        },
    ],
});


export default typography;