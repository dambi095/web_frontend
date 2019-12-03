import React from "../../node_modules/react";
import styled, { ThemeProvider } from "../../node_modules/styled-components";
import { HashRouter as Router } from "../../node_modules/react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import { ToastContainer, toast } from "../../node_modules/react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../Redux/modules/User";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
    const dispath = useDispatch();

    // redux hooks 를 이용하여 쉽게 props & state 를 가져올 수 있도록 
    const info = useSelector((store) => {
        console.log("*-*-*-*-*", store.users.isLoggedIn);
    })

    return (
        <ThemeProvider theme={Theme}>
            <>
                <GlobalStyles />
                <Router>
                    <>
                        <Header />
                        <Wrapper>
                            <h2>contents </h2>
                            <button onClick={ () => {dispath(userActions.logIn(1234,12313))}}></button>
                            <Footer />
                        </Wrapper>
                    </>
                </Router>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </>
        </ThemeProvider>
    )
}

