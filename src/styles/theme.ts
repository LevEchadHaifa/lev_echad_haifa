import { Theme, ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface CustomTheme extends Theme {
        customShadow: {
            gray: string;
        };
    }

    interface CustomThemeOptions extends ThemeOptions {
        customShadow?: {
            gray?: string;
        };
    }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#be2431"
        },
        secondary: {
            main: "#24408e"
        }
    },
    typography: {
        caption: {
            fontSize: "1.4rem",
        },
        button: {
            fontSize: "1.1rem",
            fontWeight: "bold"
        }
    },
    customShadow: {
        gray: "0 0 12 #00000020"
    }
});

export default theme;