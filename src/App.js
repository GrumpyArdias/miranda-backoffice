import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./components/pages/Dashboard";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Bookings from "./components/pages/Bookings";
import Rooms from "./components/pages/Rooms";
import Users from "./components/pages/Users";
import Contact from "./components/pages/Contact";
import Book from "./components/pages/Book";
import { BodyWrap } from "./components/styles/App.styles";
import store from "./store/Store";
import { Provider } from "react-redux";
import LoginContextProvider from "./store/ContextStore";
import NewBooking from "./components/pages/NewBookings";
import { NewRoom } from "./components/pages/newRoom";
function App() {
  const [open, setOpen] = useState(false);
  const [width, setwidth] = useState(100);
  const [display, setDisplay] = useState("flex");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") || false
  );

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");

    !authStatus && localStorage.setItem("isAuthenticated", false);
  }, []);

  useEffect(() => {
    setIsAuthenticated(
      (prevState) => localStorage.getItem("isAuthenticated") || prevState
    );
  }, [isAuthenticated]);
  console.log(`esto es el auth ${isAuthenticated}`);

  const toggleAside = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setwidth(open ? 90 : 100);
  }, [open]);

  useEffect(() => {
    if (isAuthenticated === "false") {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, [isAuthenticated]);

  return (
    <LoginContextProvider>
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
                  <Route
                    element={<NewBooking display={display} />}
                    path="/newbooking"
                  />
                  <Route element={<Rooms display={display} />} path="/rooms" />
                  <Route
                    element={<NewRoom display={display} />}
                    path="/rooms/newroom"
                  />
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
    </LoginContextProvider>
  );
}

export default App;
