import React from "../../node_modules/react";
import styled, { ThemeProvider } from "../../node_modules/styled-components";
import { HashRouter as Router } from "../../node_modules/react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { ToastContainer, toast } from "../../node_modules/react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <>
                <GlobalStyles />
                <Router>
                    <>
                    <Header/>
                        <Wrapper>
                            <h2>Hello </h2>
                            <Button text={"test text"}></Button>
                            <Footer/>
                        </Wrapper>
                    </>
                </Router>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </>
        </ThemeProvider>
    )
}

