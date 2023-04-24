import "./App.css";
import React, { useState, useEffect } from "react";
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
import { NewRoom } from "./components/pages/NewRoom";
import { NewUser } from "./components/pages/NewUser";
import { UserProfile } from "./components/pages/UserProfile";
import { LoginContext } from "./store/LoginContext";
import { useContext } from "react";
function App() {
  const { state } = useContext(LoginContext);
  const [open, setOpen] = useState(false);
  let width = 90;

  const toggleAside = () => {
    setOpen(!open);
  };

  useEffect(() => {
    open ? (width = 90) : (width = 100);
  }, [open]);

  return (
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
            {!state.authenticated ? (
              <Route element={<Login />} path="/login" />
            ) : (
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/" />
                <Route element={<Bookings />} path="/bookings" />
                <Route element={<Book />} path="/bookings/:id" />
                <Route element={<Rooms />} path="/rooms" />
                <Route element={<NewRoom />} path="/rooms/newroom" />
                <Route element={<Users />} path="/users" />
                <Route element={<NewUser />} path="/users/newuser" />
                <Route element={<UserProfile />} path="/users/:id" />
                <Route element={<Contact />} path="/contact" />
              </Route>
            )}
          </Routes>
        </BodyWrap>
      </div>
    </Router>
  );
}

export default App;
