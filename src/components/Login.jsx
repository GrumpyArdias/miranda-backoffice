import React, { useState, useEffect } from "react";
function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    console.log(`username changed to: ${mail}`);
  }, [mail]);

  useEffect(() => {
    console.log(`password changed to: ${password}`);
  }, [password]);

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
        <div>You are allready logged in</div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>Mail:</label>
          <input type="email" value={mail} onChange={habdleMail} />
          <label> Password: </label>
          <input type="password" value={password} onChange={handlePassword} />
          <button type="submit"> Login</button>
        </form>
      )}
    </>
  );
}
export default Login;
