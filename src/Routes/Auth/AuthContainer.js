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
                    dispatch(userActions.signUp(email.value,password.value,username.value))
                } catch (e) {
                    toast.error(e.message);
                }
            } else {
                toast.error("All field are required!");
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