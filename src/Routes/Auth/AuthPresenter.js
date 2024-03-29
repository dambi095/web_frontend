import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Route } from "react-router-dom";
import SignUp from "../SignUp";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius: 0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
    font-size:14px;
`;

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
    font-size:14px;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input{
            width: 100%;
            &:not(:last-child){
                margin-bottom: 7px;
            }
        }
        button{
            margin-top: 10px;
        }
    }
`

export default ({ action, username, password, email, setAction, onSubmit, secret }) => (
    <Wrapper>
        <Form>
            {action === "logIn" && (
                <form onSubmit={onSubmit}>
                    <Input placeholder={"Email"} {...email} type="email" />
                    <Input placeholder={"Password"} {...password} type="password" />
                    <Button text={"로그인"} />
                </form>
            )}
            {action === "signUp" && (
                <form onSubmit={onSubmit}>
                    <Input placeholder={"Email"} {...email} type="email" readOnly={true} />
                    <Input placeholder={"Password"} {...password} type="password" />
                    <Input placeholder={"Username"} {...username} />
                    <Button text={"회원가입"} />
                </form>
            )}
            {action === "confirm" && (
                <form onSubmit={onSubmit}>
                    <Input placeholder={"Email"} {...email} type="email" />
                    <Button text={"이메일 인증"} />
                </form>
            )}
            {action === "inputSecret" && (
                <form onSubmit={onSubmit}>
                    <Input placeholder={"Secret"} {...secret} />
                    <Button text={"인증 코드 확인"} />
                </form>
            )}
        </Form>
        {action !== "confirm" && action !== "signUp" &&
            <StateChanger>
                {action === "logIn" ? (
                    <>
                        회원가입 하시겠습니까?{" "}
                        <Link onClick={() => setAction("confirm")}>회원가입</Link>
                    </>
                ) : (
                        <>
                            이메일을 재전송 하시겠습니까?{" "}
                            <Link onClick={() => setAction("confirm")}>이메일 재전송</Link>
                        </>
                    )}
            </StateChanger>}
        {action === "confirm" && <StateChanger>
            {(
                <>
                    로그인 하시겠습니까?{" "}
                    <Link onClick={() => setAction("logIn")}>로그인</Link>
                </>
            )}
        </StateChanger>}
    </Wrapper>
)