import "./App.css";
import React, { useState } from "react";
import Login from "./components/pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./components/pages/Dashboard";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Bookings from "./components/pages/Bookings";
import Rooms from "./components/pages/Rooms";
import Users from "./components/pages/Users";
import { Contact } from "./components/pages/Contact";
import Book from "./components/pages/Book";
import { BodyWrap } from "./components/styles/App.styles";
import { NewRoom } from "./components/pages/NewRoom";
import { NewBooking } from "./components/pages/NewBooking";
import { NewUser } from "./components/pages/NewUser";
import { UserProfile } from "./components/pages/UserProfile";
import { Wrapper } from "./components/Wrapper";

export function App() {
  const [open, setOpen] = useState(false);

  const toggleAside = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Aside visible={open} />
        <BodyWrap style={{ minWidth: open ? "90%" : "100%" }}>
          <Header toggleAside={toggleAside} />
          <Routes>
            <Route
              element={
                <Wrapper>
                  <Dashboard />
                </Wrapper>
              }
              path="/"
            />
            <Route
              element={
                <Wrapper>
                  <Bookings />
                </Wrapper>
              }
              path="/bookings"
            />
            <Route
              element={
                <Wrapper>
                  <Book />
                </Wrapper>
              }
              path="/bookings/:id"
            />
            <Route
              element={
                <Wrapper>
                  <NewBooking />
                </Wrapper>
              }
              path="/bookings/newbooking"
            />
            <Route
              element={
                <Wrapper>
                  <Rooms />
                </Wrapper>
              }
              path="/rooms"
            />
            <Route
              element={
                <Wrapper>
                  <NewBooking />
                </Wrapper>
              }
              path="/rooms/newroom"
            />
            <Route
              element={
                <Wrapper>
                  <Users />
                </Wrapper>
              }
              path="/users"
            />
            <Route
              element={
                <Wrapper>
                  <NewUser />
                </Wrapper>
              }
              path="/users/newuser"
            />
            <Route
              element={
                <Wrapper>
                  <UserProfile />
                </Wrapper>
              }
              path="/users/:id"
            />
            <Route
              element={
                <Wrapper>
                  <Contact />
                </Wrapper>
              }
              path="/contact"
            />
            <Route element={<Login />} path="/login" />
          </Routes>
        </BodyWrap>
      </div>
    </Router>
  );
}
