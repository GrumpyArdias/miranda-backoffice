import React, { useState, useContext, useEffect } from "react";
import { Container, MiniContainer, ErrorMsg } from "../styles/Login.styles";
import { LoginForm } from "../styles/Form.styles";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../store/LoginContext";

function Login() {
  const { dispatch, state } = useContext(LoginContext);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      value: {
        mail: mail,
        password: pass,
        authenticated: true,
        errorMessage: "",
      },
    });
    return navigate("/");
  };

  return (
    <Container>
      <MiniContainer className="container">
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
        {state.errorMessage && (
          <ErrorMsg data-cy="error">{state.errorMessage}</ErrorMsg>
        )}
      </MiniContainer>
    </Container>
  );
}

export default Login;
