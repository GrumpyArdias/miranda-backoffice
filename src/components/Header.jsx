import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { MainHeader } from "./styles/Header.styles";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./slices/authSlice";
import { LoginContext } from "../store/ContextStore";
import { useContext } from "react";

function Header(props) {
  const dispatch = useDispatch();
  const authContext = useContext(LoginContext);
  console.log(`esto es el authContext del head  ${authContext}`);

  const [display, setDisplay] = useState("flex");
  const [path, setPath] = useState("");
  const location = useLocation();
  const isAuthenticated = authContext.state.authenticated;
  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(`esto es el auth en el header ${isAuthenticated}`);

  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        setPath("Dashboard");
        break;
      case location.pathname === "/bookings":
        setPath("Bookings");
        break;
      case /\/bookings\/[0-9]/.test(location.pathname):
        setPath("Booking Details");
        break;
      case location.pathname === "/contact":
        setPath("Contact");
        break;
      case location.pathname === "/rooms":
        setPath("Rooms");
        break;
      // case location.pathname==="/rooms/newRoom":
      //   setPath("New Room");
      //   break;
      case location.pathname === "/users":
        setPath("Users");
        break;
      // case location.pathname==="/users/newUser":
      //   setPath("New User");
      //   break;
      default:
        setPath("");
    }
  }, [location]);

  useEffect(() => {
    setDisplay(isAuthenticated ? "flex" : "none");
  }, [setDisplay]);

  console.log(`esto es el width ${props.width}`);
  return (
    <MainHeader display={{ display: display }}>
      {isAuthenticated && (
        <>
          <div
            className="mainHeaderLeft"
            style={{
              minWidth: "10%",
              marginLeft: "2%",
              marginTop: "25px",
              display: "flex",
            }}
          >
            <MenuIcon onClick={props.toggleAside} />
            <h3 style={{ margin: "0px 20px" }}>{path}</h3>
          </div>
          <div
            className="mainHeaderRight"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
              marginRight: "20px",
              minWidth: "10%",
            }}
          >
            <div className="iconCell">
              <MailOutlineIcon />
            </div>
            <div className="iconCell">
              <NotificationsNoneIcon />
            </div>
            <div className="iconCell">
              <LogoutIcon onClick={handleLogout} />
            </div>
          </div>
        </>
      )}
    </MainHeader>
  );
}

export default Header;
