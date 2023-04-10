import { createContext, useEffect } from "react";
import { useReducer } from "react";

export const LoginContext = createContext();

const types = {
  LOGIN: "LOGIN",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        mail: action.value.mail,
        password: action.value.password,
        authenticated: action.value.authenticated,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const initialState = {
  mail: localStorage.getItem("mail") || null,
  password: localStorage.getItem("password") || null,
  authenticated:
    localStorage.getItem("authenticated") === "true" ? true : false,
};

const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const AUTH_KEY = "Logged";
    localStorage.setItem(AUTH_KEY, { state });
  });
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
