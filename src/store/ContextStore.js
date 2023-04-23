import { createContext } from "react";
import { useReducer } from "react";

export const LoginContext = createContext();

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      if (action.value.mail === "" || action.value.password === "") {
        return {
          ...state,
          errorMessage: "Please enter both email and password.",
        };
      }
      if (!isValidEmail(action.value.mail)) {
        return {
          ...state,
          errorMessage: "Please enter a valid email.",
        };
      }
      if (
        action.value.mail === "a@a.com" &&
        action.value.password === "password"
      ) {
        localStorage.setItem("mail", action.value.mail);
        localStorage.setItem("isAuthenticated", true);
        return {
          ...state,
          mail: action.value.mail,
          password: action.value.password,
          authenticated: true,
          errorMessage: "", // clear any previous error message
        };
      } else {
        return {
          ...state,
          mail: null,
          password: null,
          authenticated: false,
          errorMessage: "Invalid email or password.",
        };
      }

    case types.LOGOUT:
      localStorage.removeItem("mail");
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
  authenticated:
    localStorage.getItem("isAuthenticated") === "true" ? true : false,
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
