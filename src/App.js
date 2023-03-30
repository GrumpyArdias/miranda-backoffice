import "./App.css";
import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { useEffect } from "react";
import Bookings from "./components/Bookings";
import Rooms from "./components/Rooms";

function App() {
  const [open, setOpen] = useState(false);
  const [width, setwidth] = useState(100);

  const toggleAside = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setwidth(open ? 90 : 100);
  }, [open]);

  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <Aside visible={open} />
        <div
          className="BodyWrap"
          style={{
            minWidth: `${width}%`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header toggleAside={toggleAside} />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Dashboard />} path="/" />
              <Route element={<Bookings />} path="/bookings" />
              <Route element={<Rooms />} path="/rooms" />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
