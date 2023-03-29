import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { MainHeader } from "./styles/Header.style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") === "true"
  );

  const handleLogOut = () => {
    localStorage.removeItem("logged");
    setIsLogged(false);
    navigate("/login");
  };
  console.log(`esto es el width ${props.width}`);
  return (
    <MainHeader>
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
        <h3 style={{ margin: "0px 20px" }}>Dashboard</h3>
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
          <LogoutIcon
            onClick={isLogged ? handleLogOut : () => navigate("/login")}
          />
        </div>
      </div>
    </MainHeader>
  );
}

export default Header;