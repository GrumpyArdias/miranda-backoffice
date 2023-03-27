import React, { useState, useEffect } from "react";
import { Container, MiniContainer } from "./styles/Containers.style";
import { LoginForm } from "./styles/Form.style";
function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(localStorage.getItem("logged") || false);

  useEffect(() => {
    console.log(`username changed to: ${mail}`);
  }, [mail]);

  useEffect(() => {
    console.log(`password changed to: ${password}`);
  }, [password]);

  useEffect(() => {
    localStorage.setItem("logged", logged);
  }, [logged]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!mail || !password) {
      alert("Please enter both a username and password");
      return;
    }
    if (mail === "a@a.com" && password === "password") {
      setLogged(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const habdleMail = (e) => {
    setMail(e.target.value);
    console.log(mail);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <>
      {logged ? (
        <MiniContainer style={{ backgroundColor: "54edbe" }}>
          You are allready logged in
        </MiniContainer>
      ) : (
        <Container>
          <MiniContainer>
            {" "}
            <LoginForm onSubmit={handleLogin}>
              <label>Mail:</label>
              <br />
              <input type="email" value={mail} onChange={habdleMail} />
              <br />
              <label> Password: </label>
              <br />
              <input
                type="password"
                value={password}
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
