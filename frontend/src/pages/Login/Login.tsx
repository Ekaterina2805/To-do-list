import {
  FC,
} from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import useLogin from "./Login.hook";

import "./Login.css";

interface ILogin {}

const Login: FC<ILogin> = () => {
  const { email, setEmail, password, setPassword, login } = useLogin();
  return (
    <>
      <div className="Login__main">
        <TextField
          inputProps={{ pattern: "[a-z]{1,15}" }}
          id="Login__text-field"
          label="Логин"
          variant="outlined"
          value={email}
          onChange={setEmail}
          margin="dense"
        />
        <TextField
          inputProps={{ pattern: "[a-z]{1,15}" }}
          id="Login__password-field "
          label="Пароль"
          variant="outlined"
          type="password"
          value={password}
          onChange={setPassword}
          margin="dense"
        />
        <Button
          id="Login__button"
          className="Login__Button"
          variant="contained"
          onClick={login}
        >
          ВОЙТИ
        </Button>
      </div>
    </>
  );
};

export default Login;
