import { ThemeOptions, createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    function createTheme(options?: ThemeOptions): Theme;
}

let theme = createTheme({
    palette: {
        primary: {
            main: "#be2431"
        },
        secondary: {
            main: "#F0C4C3"
        }
    }
});

theme = createTheme(theme, {
    typography: {
        fontFamily: [
            "Assistant",
            "-apple-system",
            "BlinkMacSystemFont",
            "\"Segoe UI\"",
            "Roboto",
            "\"Helvetica Neue\"",
            "Arial",
            "sans-serif",
            "\"Apple Color Emoji\"",
            "\"Segoe UI Emoji\"",
            "\"Segoe UI Symbol\"",
        ].join(","),
        h1: {
            color: theme.palette.primary.main,
            fontSize: "2.4rem",
            marginBottom: "2rem",
            fontFamily: "PassionOne"
        },
        h2: {
            fontSize: "1.9rem",
            marginBottom: "1rem",
            fontFamily: "PassionOne"
        },
        h3: {
            fontSize: "1.9rem",
            fontWeight: 600,
            fontFamily: "Assistant"
        },
        h4: {
            fontSize: "1.4rem",
            fontWeight: 600,
            fontFamily: "Assistant"
        },
        subtitle1: {
            fontSize: "2.6rem",
            fontWeight: "bold",
            fontFamily: "Assistant",
        },
        subtitle2: {
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Assistant",
            color: theme.palette.primary.main,
            textAlign: "center",
            marginBottom: "1rem"
        },
        caption: {
            fontSize: "1.4rem",
            fontFamily: "Assistant",
            fontWeight: 300
        },
        button: {
            fontFamily: "Assistant",
            fontSize: "1.1rem",
            fontWeight: 600
        },
        body1: {
            fontSize: "1.4rem",
            fontFamily: "Assistant",
            fontWeight: 400
        },
        body2: {
            fontSize: "1.2rem",
            fontFamily: "Assistant",
            fontWeight: 400
        }
    }
});

export default theme;