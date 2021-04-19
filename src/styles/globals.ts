import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

import barlowCondensedSemiBold from "./fonts/BarlowCondensed-SemiBold.ttf";
import roboto from "./fonts/Roboto-Regular.ttf";
import robotoBold from "./fonts/Roboto-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'barlow';
        src: url(${barlowCondensedSemiBold}) format('truetype');
    };

    @font-face {
        font-family: 'roboto';
        src: url(${roboto}) format('truetype');
    };

    @font-face {
        font-family: 'robotoBold';
        src: url(${robotoBold}) format('truetype');
    };

    * {
        margin: 0rem;
        padding: 0rem;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: "roboto";
        height: 100%;
    }

    body {
        font-size: 1.5rem;
        height: 100%;
        background-color: ${(props) => props.theme.colors.white};
       
    }

    #root {
        height: 100%;
    }
`;
