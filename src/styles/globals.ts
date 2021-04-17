import { createGlobalStyle } from "styled-components";

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

    html, body {
        background-color: greyLight;
        margin: 0rem;
        padding: 0rem;
    }
`;