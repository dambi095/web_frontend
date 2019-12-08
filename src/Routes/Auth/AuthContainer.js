import React, { useState } from "react";
import { actionCreators as userActions } from "../../Redux/modules/User";
import { useDispatch } from "react-redux";
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
                    const registerCheck = await dispatch(userActions.registerCheck(email.value));
                    console.log("registerCheck: ", registerCheck);
                    if (registerCheck === true) {
                        const signUpResult = await dispatch(userActions.signUp(email.value, password.value, username.value))
                        if (signUpResult === true) {
                            toast.success("인증번호가 전송되었습니다");
                            setTimeout(() => setAction("confirm"), 4000);
                        } else {
                            toast.error("회원가입에 실패하였습니다");
                        }
                    } else {
                        toast.error("이미 가입한 이메일입니다");
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