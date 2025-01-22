import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Inter, sans-serif;
    line-height: 1.5;
    color: #333;
}

button:focus,
input:focus {
    outline: none;
}

a {
    text-decoration: none;
    color: inherit;
}

ul,
ol {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}
`;
