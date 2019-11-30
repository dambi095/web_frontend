import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import Theme from "../../styles/Theme";


const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                <>
                    <GlobalStyles />
                    <Router>
                        <Wrapper>
                            <h2>Hello </h2>
                        </Wrapper>
                    </Router>
                </>
            </ThemeProvider>
        )
    }
}

export default App