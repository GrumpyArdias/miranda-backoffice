import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { MainHeader } from "./styles/Header.styles";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") === "true"
  );
  const [display, setDisplay] = useState("flex");
  const [path, setPath] = useState("");
  const location = useLocation();

  const handleLogOut = (props) => {
    localStorage.removeItem("logged");
    setIsLogged(false);
    navigate("/login");
  };

  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        setPath("Dashboard");
        break;
      case location.pathname === "/bookings":
        setPath("Bookings");
        break;
      // case /\/bookings\/[0-9]/.test(location.pathname):
      //   setPath("Booking Details");
      //   break;
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
    setDisplay(isLogged ? "flex" : "none");
  }, [setDisplay]);

  console.log(`esto es el width ${props.width}`);
  return (
    <MainHeader display={{ display: display }}>
      {isLogged && (
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
              <LogoutIcon onClick={handleLogOut} />
            </div>
          </div>
        </>
      )}
    </MainHeader>
  );
}

export default Header;
