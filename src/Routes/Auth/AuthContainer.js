import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";


export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const secret = useInput("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (action === "logIn") {

        } else if (action === "signUp") {

        } else if (action === "confirm") {

        }
    }

    return <AuthPresenter
        setAction={setAction}
        action={action}
        username={username}
        firstName={firstName}
        lastName={lastName}
        email={email}
        onSubmit={onSubmit}
        secret={secret}
    />
}