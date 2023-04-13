import { createContext, useEffect } from "react";
import { useReducer } from "react";

export const LoginContext = createContext();

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      if (
        action.value.mail === "a@a.com" &&
        action.value.password === "password"
      ) {
        localStorage.setItem("mail", action.value.mail);
        localStorage.setItem("password", action.value.password);
        localStorage.setItem("isAuthenticated", action.value.authenticated);
        return {
          ...state,
          mail: action.value.mail,
          password: action.value.password,
          authenticated: action.value.authenticated,
        };
      } else {
        alert("Mail o contraseña invalidos");
        return {
          ...state,
          mail: null,
          password: null,
          authenticated: false,
        };
      }

    case types.LOGOUT:
      localStorage.removeItem("mail");
      localStorage.removeItem("password");
      localStorage.setItem("isAuthenticated", false);

      return {
        authenticated: false,
        email: "",
        password: "",
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const initialState = {
  mail: localStorage.getItem("mail") || null,
  password: localStorage.getItem("password") || null,
  authenticated:
    localStorage.getItem("isAuthenticated") === "true" ? true : false,
};

const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
