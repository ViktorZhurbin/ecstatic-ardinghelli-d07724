import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root, ::before, ::after {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --color-white: #fff;
        --color-black: rgba(0, 0, 0, 0.87);
        --color-red: rgb(211, 47,47);
        --color-bg: #2a0a4a;
        --color-bg-grey: rgba(0, 0, 0, 0.12);
        --color-bg-light-grey: rgba(0, 0, 0, 0.04);
        --color-subtitle: #9484a4;
        --color-grey: #bcbec2;
        --color-orange: #fd4b24;
    }

    body, h1, h2 {
        margin: 0;
    }
`;
