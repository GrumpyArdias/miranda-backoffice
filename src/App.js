import "./App.css";
import React from "react";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./components/pages/Dashboard";
import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { useEffect } from "react";
import Bookings from "./components/pages/Bookings";
import Rooms from "./components/pages/Rooms";
import Users from "./components/pages/Users";
import Contact from "./components/pages/Contact";
import Book from "./components/pages/Book";
import { BodyWrap } from "./components/styles/App.styles";
import store from "./store/Store";
import { Provider } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  const [width, setwidth] = useState(100);
  const [display, setDisplay] = useState("flex");
  const loginStatus = localStorage.getItem("logged");

  const toggleAside = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setwidth(open ? 90 : 100);
  }, [open]);

  useEffect(() => {
    if (loginStatus === "false" || loginStatus === false) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App" style={{ display: "flex" }}>
          <Aside visible={open} />
          <BodyWrap
            style={{
              minWidth: `${width}%`,
            }}
          >
            <Header toggleAside={toggleAside} />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard display={display} />} path="/" />
                <Route
                  element={<Bookings display={display} />}
                  path="/bookings"
                />
                <Route
                  element={<Book display={display} />}
                  path="/bookings/:id"
                />
                <Route element={<Rooms display={display} />} path="/rooms" />
                <Route element={<Users display={display} />} path="/users" />
                <Route
                  element={<Contact display={display} />}
                  path="/contact"
                />
              </Route>
              <Route element={<Login />} path="/login" />
            </Routes>
          </BodyWrap>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
