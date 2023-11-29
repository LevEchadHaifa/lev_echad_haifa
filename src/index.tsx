import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "locales/index";
import SiteProvider from "context/SiteContext";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <SiteProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </SiteProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
