import { createGlobalStyle } from "../../node_modules/styled-components";
import reset from "../../node_modules/styled-reset";

// styled-components 의 최신 방식으로 만드는 global styles
export default createGlobalStyle`
    ${reset};
    @import url ('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        color: ${props => props.theme.blueColor};
        text-decoration: none;
        font-size:14px;
    }
    input:focus {
        outline: none
    }
`;