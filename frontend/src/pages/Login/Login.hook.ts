import {Dispatch, SetStateAction, useContext} from "react";
import { useInput } from "../../hooks/useInput";
import { AuthDispatchContext } from "../../context/Auth.context";
import { User } from "../../types/User";
import { UserDispatchContext } from "../../context/User.context";
import { loginUser } from "../../hooks/backend/login";

export default function useLogin() {
    const [email, setEmail] = useInput();
    const [password, setPassword] = useInput();

    const setToken: Dispatch<SetStateAction<string>> = useContext(AuthDispatchContext);
    const setUser: Dispatch<SetStateAction<User| undefined>> = useContext(UserDispatchContext);

    function login() {
        loginUser(email, password).then((data) => {
            setUser(data.user);
            setToken(data.accessToken)
            console.log(data.accessToken)
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        })
    }

    return { email, setEmail, password, setPassword, login };
    
}