import {
  ContactTableStyle,
  ArchiveStatus,
  NotArchiveStatus,
  TdWrapper,
  StatusWrapper,
  IconWrapper,
} from "./styles/ContactTable.styles";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../hooks/hooks";
import { deleteComment } from "../slices/contactSlice";
import React from "react";
import { CommentProps, CommentType } from "../@types/contacts";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function ContactTable(props: CommentProps) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;
  const dispatch = useAppDispatch();

  const handleStatusSwitch = (status: boolean) => {
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
            <p>Active</p>
          </NotArchiveStatus>
        );

      default:
        return "error in the User Status";
    }
  };

  const handleComentSwitch = (coment: boolean) => {
    switch (coment) {
      case true:
        return (
          <ArchiveStatus>
            <p>Good</p>
          </ArchiveStatus>
        );
      case false:
        return (
          <NotArchiveStatus>
            <p>Bad</p>
          </NotArchiveStatus>
        );

      default:
        return "error in the Coment Status";
    }
  };

  const handleDelete = (comment: CommentType) => {
    dispatch(deleteComment(comment));
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
              <td colSpan={2}>{data.id}</td>
              <td colSpan={2}>{data.commentDate}</td>
              <td colSpan={2}>{data.fullName}</td>
              <td colSpan={2}>{data.email}</td>
              <td colSpan={2}>{data.phone}</td>
              <td colSpan={2}>{data.subject}</td>
              <td colSpan={2}>{handleComentSwitch(data.comment)}</td>
              <td colSpan={2}>
                <TdWrapper className="TdWrapper">
                  <StatusWrapper>
                    {handleStatusSwitch(data.action)}
                  </StatusWrapper>
                  <IconWrapper>
                    <RemoveCircleOutlineIcon
                      style={{ color: "red" }}
                      onClick={() => handleDelete(data)}
                    />
                  </IconWrapper>
                </TdWrapper>
              </td>
            </tr>
          );
        })}
      </tbody>
    </ContactTableStyle>
  );
}

export default ContactTable;
