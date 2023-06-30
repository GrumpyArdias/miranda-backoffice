import { createContext } from "react";
import { useReducer } from "react";
import { apiLoginFetch } from "../utils/apiFetch";
import { useEffect } from "react";

export const LoginContext = createContext();

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      localStorage.setItem("mail", action.value.mail);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", action.value.token);
      localStorage.setItem("userId", action.value.userId);
      return {
        ...state,
        mail: action.value.mail,
        userId: action.value.userId,
        authenticated: true,
        errorMessage: "",
      };

    case types.LOGOUT:
      localStorage.removeItem("mail");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

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
  authenticated:
    localStorage.getItem("isAuthenticated") === "true" ? true : false,
  userId: localStorage.getItem("userId"),
  errorMessage: "",
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
