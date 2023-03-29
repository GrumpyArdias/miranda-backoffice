import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GroupIcon from "@mui/icons-material/Group";
import Logo from "../images/hotel-miranda-logo.png";
import { LeftMainContainer } from "./styles/Containers.style";

function Aside(props) {
  const asideStyle = {
    display: props.visible ? "flex" : "none",
  };
  return (
    <LeftMainContainer style={asideStyle}>
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
      <div className="lateralUser">
        <div id="UserPhoto"></div>
        <div id="UserName">
          <h3>Paco</h3>
        </div>
        <button id="UserEditButton">Edit profile</button>
      </div>
    </LeftMainContainer>
  );
}

export default Aside;
