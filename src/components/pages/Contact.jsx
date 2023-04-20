import {
  Reviews,
  ContactTopWrap,
  ContactTopLeftWrap,
  ContactTopRightWrap,
} from "../styles/Contact.styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ContactTable from "../ContactTable";
import Dropdown from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../slices/contactSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contacts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contact.length === 0) {
      navigate("/");
    }
    console.log(contact);
  }, [contact, navigate]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = [
    "ID",
    "Date",
    "Customer",
    "Email",
    "Number",
    "Subjet",
    "Coment",
    "Action",
  ];
  const rowDataArray = contact;
  return (
    <>
      <Reviews>
        <h3>Latest Review by Customers</h3>
        <div className="Reviews-wrapper">
          <div className="Reviews-Cards">
            <div className="Reviews-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
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
      <ContactTopWrap>
        <ContactTopLeftWrap>
          <div className="Rooms-menu-cell">
            <h3>All Contacts</h3>
          </div>
          <div className="Rooms-menu-cell">
            <h3>Archive</h3>
          </div>
        </ContactTopLeftWrap>
        <ContactTopRightWrap>
          <Dropdown options={options} onSelect={handleSelect} />
        </ContactTopRightWrap>
      </ContactTopWrap>
      <ContactTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </>
  );
}
export default Contact;
