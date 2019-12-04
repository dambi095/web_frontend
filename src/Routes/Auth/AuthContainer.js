import React, { useState } from "react";
import { actionCreators as userActions } from "../../Redux/modules/User";
import { useSelector, useDispatch } from "react-redux";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";


export default () => {
    const dispatch = useDispatch();
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const password = useInput("");
    const email = useInput("");
    const secret = useInput("");

    const onSubmit = async (e) => {

        e.preventDefault();
        if (action === "logIn") {

        } else if (action === "signUp") {
            if (email.value !== "" && username.value !== "" && password.value !== "") {
                try {
                    const signUpResult = await dispatch(userActions.signUp(email.value, password.value, username.value))
                    if (signUpResult === true) {
                        toast.success("회원가입에 성공했습니다! 로그인 창으로 이동합니다");
                        setTimeout(() => setAction("logIn"),4000);
                    } else {
                        toast.error("다른 이메일을 입력해주세요");
                    }
                } catch (e) {
                    toast.error(e.message);
                }
            } else {
                toast.error("필드 항목들을 모두 입력해주세요");
            }
        } else if (action === "confirm") {

        }
    }

    return <AuthPresenter
        setAction={setAction}
        action={action}
        username={username}
        password={password}
        email={email}
        onSubmit={onSubmit}
        secret={secret}
    />
}