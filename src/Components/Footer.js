import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 6px;
    border: 0;
    background-color: white;
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    &:not(:last-child) {
        margin-right: 16px;
    }
`;

const Link = styled.a`
    color: ${props => props.theme.darkGreyColor};
`;

const Copyright = styled.span`
    color: ${props => props.theme.darkGreyColor}; 
`;

export default () => (
    <Footer>
        <List>
            <ListItem>
                <Link href="#">프로젝트명: 다이어리</Link>
            </ListItem>
            <ListItem>
                <Link href="#">개발자: 권담비</Link>
            </ListItem>
            <ListItem>
                <Link href="#">전화: 010-7562-2711</Link>
            </ListItem>
            <ListItem>
                <Link href="#">이메일: qwerty6789011@gmail.com</Link>
            </ListItem>
            <ListItem>
                <Link href="#">깃허브: qwerty6789011@gmail.com</Link>
            </ListItem>
        </List>
        <Copyright>
            EXDIARY{new Date().getFullYear()} &copy;
        </Copyright>
    </Footer>
);