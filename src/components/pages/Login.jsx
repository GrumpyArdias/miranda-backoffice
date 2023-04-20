import React, { useState, useContext } from "react";
import { Container, MiniContainer } from "../styles/Login.styles";
import { LoginForm } from "../styles/Form.styles";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../store/ContextStore";

function Login() {
  const { dispatch, state } = useContext(LoginContext);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      value: {
        mail: mail,
        password: pass,
        authenticated: true,
      },
    });
  };

  if (state.authenticated) return <Navigate to={"/"} />;

  return (
    <Container>
      <MiniContainer>
        <LoginForm onSubmit={handleLogin}>
          <label>Mail:</label>
          <br />
          <input
            type="email"
            data-cy="email"
            placeholder="a@a.com"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <br />
          <label> Password: </label>
          <br />
          <input
            type="password"
            data-cy="password"
            value={pass}
            placeholder="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <button type="submit" data-cy="LoginSubmit">
            {" "}
            Login
          </button>
        </LoginForm>
      </MiniContainer>
    </Container>
  );
}

export default Login;
