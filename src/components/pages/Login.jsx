import React from "react";
import { Container, MiniContainer } from "../styles/Login.styles";
import { LoginForm } from "../styles/Form.styles";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, updateUser } from "../slices/authSlice";
import { debounce } from "lodash"; //

function Login() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  // const debouncedHandleLogin = debounce(handleLogin, 1000);

  // console.log(`esto es el debounce ${debouncedHandleLogin}`);

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const handleMail = (e) => {
    console.log(`esto es el mail ${e.target.value}`);
    dispatch(updateUser({ email: e.target.value, password }));
  };

  const handlePassword = (e) => {
    console.log(`esto es el passowrd ${e.target.value}`);
    dispatch(updateUser({ email, password: e.target.value }));
  };

  return (
    <>
      {authenticated ? (
        <Navigate to={"/"} />
      ) : (
        <Container>
          <MiniContainer>
            <LoginForm
              onSubmit={() => {
                handleLogin();
              }}
            >
              <label>Mail:</label>
              <br />
              <input
                type="email"
                placeholder="a@a.com"
                value={email}
                onChange={handleMail}
              />
              <br />
              <label> Password: </label>
              <br />
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={handlePassword}
              />
              <br />
              <button type="submit"> Login</button>
            </LoginForm>
          </MiniContainer>
        </Container>
      )}
    </>
  );
}

export default Login;
