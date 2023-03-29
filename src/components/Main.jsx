import { MainBody, Kpis, Reviews } from "./styles/Containers.style";
import BedIcon from "@mui/icons-material/Bed";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function Main() {
  return (
    <>
      <MainBody>
        <Kpis>
          <div className="KpiCard">
            <div className="KpiCardLogo">
              <BedIcon className="icon" fontSize=" 2.188rem" />
            </div>
            <div className="KpiCardText">
              <h3>8.461</h3>
              <p>New Booking</p>
            </div>
          </div>
          <div className="KpiCard">
            <div className="KpiCardLogo">
              <EventAvailableIcon className="icon" fontSize=" 2.188rem" />
            </div>
            <div className="KpiCardText">
              <h3>963</h3>
              <p>Scheduled Room</p>
            </div>
          </div>
          <div className="KpiCard">
            <div className="KpiCardLogo">
              <LoginIcon className="icon" fontSize=" 2.188rem" />
            </div>
            <div className="KpiCardText">
              <h3>753</h3>
              <p>Check In</p>
            </div>
          </div>
          <div className="KpiCard">
            <div className="KpiCardLogo">
              <LogoutIcon className="icon" fontSize=" 2.188rem" />
            </div>
            <div className="KpiCardText">
              <h3>516</h3>
              <p>Check Out</p>
            </div>
          </div>
        </Kpis>
        <Reviews>
          <div className="Reviews-Cards"></div>
        </Reviews>
      </MainBody>
    </>
  );
}

export default Main;
