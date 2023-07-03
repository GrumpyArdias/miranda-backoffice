import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GroupIcon from "@mui/icons-material/Group";
import Logo from "../images/hotel-miranda-logo.png";
import { LeftMainContainer, StyledLink } from "./styles/Aside.styles";
import { useEffect, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getOneUser } from "../slices/userSlice";
import { LoginContext } from "../store/LoginContext";
import { useNavigate } from "react-router-dom";

function Aside(props) {
  const asideDisplay = props.visible ? "flex" : "none";
  const dispatch = useAppDispatch();
  const { state } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (state.authenticated) {
      console.log(userId);
      dispatch(getOneUser(userId));
    }
  }, [dispatch, state.authenticated]);

  const user = useAppSelector((state) => state.users.user);

  return (
    <LeftMainContainer style={{ display: asideDisplay }}>
      <div className="cell">
        <img src={Logo} alt="Hotel miranda Logo" id="hotelLogo" />
      </div>
      <StyledLink to="/">
        <div className="cell">
          <DashboardIcon />
          <h3>Dashboard</h3>
        </div>
      </StyledLink>
      <StyledLink
        style={{ textDecoration: "none", color: "inherit" }}
        to="/bookings"
      >
        <div className="cell">
          <EventAvailableIcon data-cy="Bookings" />
          <h3>Bookings</h3>
        </div>
      </StyledLink>
      <StyledLink to="/rooms">
        <div className="cell">
          <VpnKeyIcon data-cy="Rooms" />
          <h3>Rooms</h3>
        </div>
      </StyledLink>
      <StyledLink to="/contact">
        <div className="cell">
          <PermContactCalendarIcon data-cy="Contact" />
          <h3>Contact</h3>
        </div>
      </StyledLink>
      <StyledLink to="/users">
        <div className="cell">
          <GroupIcon data-cy="Users" />
          <h3>Users</h3>
        </div>
      </StyledLink>
      <div className="lateralUser">
        <div id="UserPhoto"></div>
        <div id="UserName">{user.id ? <h3>{user.fullName}</h3> : ""}</div>
        <button id="UserEditButton" onClick={() => navigate("/users/edit")}>
          Edit profile
        </button>
      </div>
    </LeftMainContainer>
  );
}

export default Aside;
