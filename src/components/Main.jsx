import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { MainHeader, LeftMainContainer } from "./styles/Containers.style";
import { MainWrapper } from "./styles/Containers.style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GroupIcon from "@mui/icons-material/Group";
import Logo from "../images/hotel-miranda-logo.png";

function Main() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") === "true"
  );
  const [headerWidth, setHeaderWidth] = useState("90%");

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setHeaderWidth("90%");
    } else {
      setHeaderWidth("100%");
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem("logged");
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <MainWrapper>
      <LeftMainContainer style={{ display: open ? "flex" : "none" }}>
        <div className="cell">
          <img src={Logo} alt="Hotel miranda Logo" />
        </div>
        <div className="cell">
          <DashboardIcon />
          <h3>Dashboard</h3>
        </div>
        <div className="cell">
          <EventAvailableIcon />
          <h3>Bookings</h3>
        </div>
        <div className="cell">
          <VpnKeyIcon />
          <h3>Rooms</h3>
        </div>
        <div className="cell">
          <PermContactCalendarIcon />
          <h3>Contact</h3>
        </div>
        <div className="cell">
          <GroupIcon />
          <h3>Users</h3>
        </div>
      </LeftMainContainer>
      <MainHeader style={{ width: headerWidth }}>
        <div
          style={{
            minWidth: "10%",
            marginLeft: "2%",
            padding: "10px ",
            display: "flex",
          }}
        >
          <MenuIcon onClick={handleOpen} />
          <h3 style={{ margin: "0px 20px" }}>Dashboard</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            minWidth: "10%",
          }}
        >
          <MailOutlineIcon />
          <NotificationsNoneIcon />
          <LogoutIcon
            onClick={isLogged ? handleLogOut : () => navigate("/login")}
          />
        </div>
      </MainHeader>
    </MainWrapper>
  );
}

export default Main;
