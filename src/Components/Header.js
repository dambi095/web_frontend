
import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Logo } from "./Icons";

const Header = styled.header`
    width: 100%;
    border: 0;
    background-color: white;
    border-bottom: ${props => props.theme.boxBorder};
    border-radius: 0px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth}
    display: flex;
    justify-content:center;
`;

const HeaderColumn = styled.div`
    width: 33%;
    text-align: center;
    &:first-child {
        margin-right: auto;
        text-align: left;
    }
    &:last-child {
        margin-left: auto;
        text-align: right;
    }
`;

const SearchInput = styled(Input)`
    background - color: ${ props => props.theme.bgColor};
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    height: auto;
    width:70%;
    text-align: center;
    &::placeholder {
        opacity: 0.8;
        font-weight: 200;
    }
`;

const HeaderLink = styled(Link)`
    &:not(:last-child){
        margin-right:30px;
    }
`;

// withRouter는 주로 history에 접근하여 컴포넌트에서 라우터를 조작하는데 사용 
export default withRouter(({ history }) => {
    const search = useInput("");
    const onSearchSubmit = e => {
        e.preventDefault();
        history.push(`/search?term=${search.value}`)
    }
    return (
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <Logo />
                </HeaderColumn>
                <HeaderColumn>
                    <form onSubmit={onSearchSubmit}>
                        <SearchInput {...search} placeholder="Search" />
                    </form>
                </HeaderColumn>
                <HeaderColumn>
                
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    )
});