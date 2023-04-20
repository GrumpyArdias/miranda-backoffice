import React, { useState, useContext } from "react";
import { Container, MiniContainer, ErrorMsg } from "../styles/Login.styles";
import { LoginForm } from "../styles/Form.styles";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../store/ContextStore";

function Login() {
  const { dispatch, state } = useContext(LoginContext);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (mail === "" || pass === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(mail)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (pass.length < 6) {
      setErrorMessage("Password should be at least 6 characters.");
      return;
    }

    // If all validations pass, dispatch the login action
    dispatch({
      type: "LOGIN",
      value: {
        mail: mail,
        password: pass,
        authenticated: true,
      },
    });
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  if (state.authenticated) return <Navigate to={"/"} />;

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
        {errorMessage && <ErrorMsg data-cy="error">{errorMessage}</ErrorMsg>}
      </MiniContainer>
    </Container>
  );
}

export default Login;
