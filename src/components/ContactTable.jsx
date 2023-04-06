import {
  ContactTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  ArchiveStatus,
  NotArchiveStatus,
} from "./styles/ContactTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";

function ContactTable(props) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const handleStatusSwitch = (status) => {
    switch (status) {
      case true:
        return (
          <ArchiveStatus>
            <p>Inactive</p>
          </ArchiveStatus>
        );
      case false:
        return (
          <NotArchiveStatus>
            <p>Acttive</p>
          </NotArchiveStatus>
        );

      default:
        return "error in the User Status";
    }
  };

  return (
    <ContactTableStyle>
      <thead>
        <tr>
          {headerArray.map((header) => {
            return (
              <th colSpan={2} key={uuid()}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rowDataArray.map((data, index) => {
          return (
            <tr key={uuid()}>
              <td colSpan={2}>{data.client_id}</td>
              <td colSpan={2}>{data.check_out}</td>
              <td colSpan={2}>{data.full_name}</td>
              <td colSpan={2}>Mail@mail.com</td>
              <td colSpan={2}>+34 123 456</td>
              <td colSpan={2}>PlaceHolder</td>
              <td colSpan={2}>Good</td>
              <td colSpan={2}>{handleStatusSwitch(data.coment_status)}</td>
            </tr>
          );
        })}
      </tbody>
    </ContactTableStyle>
  );
}

export default ContactTable;
