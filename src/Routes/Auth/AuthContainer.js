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

        } else if (action === "confirm") {
            if (email.value !== "") {
                try {
                    const registerCheck = await dispatch(userActions.registerCheck(email.value));
                    if (registerCheck === false) {
                        const sendResult = await dispatch(userActions.sendEmail(email.value));
                       
                        if (sendResult !== "none") {
                            toast.success("인증번호가 전송되었습니다");
                            setTimeout(() => setAction("inputSecret"), 4000);
                        } else {
                            toast.error("가입에 실패했습니다. 다시 시도해 주세요");
                        }
                    } else {
                        toast.error("이미 가입한 이메일입니다");
                    }
                } catch (e) {
                }
            }
        } else if (action === "signUp") {
            if (email.value !== "" && username.value !== "" && password.value !== "") {

                try {
                    const signUpResult = await dispatch(userActions.signUp(email.value, password.value, username.value))
                    if (signUpResult === true) {
                        toast.success("회원가입이 완료되었습니다! 로그인 창으로 이동합니다");
                        setTimeout(() => setAction("logIn"), 4000);
                    } else {
                        toast.error("회원가입에 실패하였습니다");
                    }

                } catch (e) {
                    toast.error(e.message);
                }
            } else {
                toast.error("필드 항목들을 모두 입력해주세요");
            }

        } else if (action === "inputSecret") {
            if (secret !== "") {
                try {
                    const confirmResult = await dispatch(userActions.confirmAuthCode(email.value, secret.value));
                    if (confirmResult === true) {
                        toast.success("인증번호가 확인 되었습니다");
                        setTimeout(() => setAction("signUp"), 4000);

                    } else {
                        toast.error("인증번호를 확인해주세요")
                    }
                } catch (e) {

                }
            } else {
                toast.error("인증 코드를 입력해주세요")
            }
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