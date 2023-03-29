import "./App.css";
import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Main from "./components/Main";
import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { useEffect } from "react";

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
              <Route element={<Main />} path="/" />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
