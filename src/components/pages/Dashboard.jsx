import { MainBody, Kpis, Reviews } from "../styles/Dashboard.styles";
import BedIcon from "@mui/icons-material/Bed";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function Dashboard(props) {
  return (
    <>
      <MainBody style={{ display: props.display }}>
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
          <h3>Latest Review by Customers</h3>
          <div className="Reviews-wrapper">
            <div className="Reviews-Cards">
              <div className="Reviews-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="Reviews-user">
                <div className="Reviews-user-info">
                  <div className="Reviews-user-photo"></div>
                  <div className="Reviews-user-text">
                    <h4>Michi Paco</h4>
                    <p>4min Ago</p>
                  </div>
                </div>
                <div className="Reviews-user-feedback">
                  <CheckCircleOutlineIcon
                    fontSize="large"
                    style={{ color: "green" }}
                  />
                  <HighlightOffIcon fontSize="large" style={{ color: "red" }} />
                </div>
              </div>
            </div>
            <div className="Reviews-Cards">
              <div className="Reviews-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="Reviews-user">
                <div className="Reviews-user-info">
                  <div className="Reviews-user-photo"></div>
                  <div className="Reviews-user-text">
                    <h4>Michi Paco</h4>
                    <p>4min Ago</p>
                  </div>
                </div>
                <div className="Reviews-user-feedback">
                  <CheckCircleOutlineIcon
                    fontSize="large"
                    style={{ color: "green" }}
                  />
                  <HighlightOffIcon fontSize="large" style={{ color: "red" }} />
                </div>
              </div>
            </div>
            <div className="Reviews-Cards">
              <div className="Reviews-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="Reviews-user">
                <div className="Reviews-user-info">
                  <div className="Reviews-user-photo"></div>
                  <div className="Reviews-user-text">
                    <h4>Michi Paco</h4>
                    <p>4min Ago</p>
                  </div>
                </div>
                <div className="Reviews-user-feedback">
                  <CheckCircleOutlineIcon
                    fontSize="large"
                    style={{ color: "green" }}
                  />
                  <HighlightOffIcon fontSize="large" style={{ color: "red" }} />
                </div>
              </div>
            </div>
          </div>
        </Reviews>
      </MainBody>
    </>
  );
}

export default Dashboard;
