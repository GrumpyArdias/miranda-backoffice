import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function GridTable(props) {
  const { headerArray, rowDataArray } = props;
  const navigate = useNavigate();

  const [rowDataArrayWithId, setRowDataArrayWithId] = useState(() =>
    rowDataArray.map((rowData) => ({ ...rowData, id: uuidv4() }))
  );

  const headerItems = headerArray.map((header, index) => (
    <th key={`header-${index}`}>{header}</th>
  ));

  const handleRowClick = (rowId) => {
    const url = `/details?id=${rowId}`;
    navigate(url);
  };

  const dataRows = rowDataArrayWithId.map((rowData, index) => {
    const rowKey = rowData.id;
    return (
      <tr key={rowKey} onClick={() => handleRowClick(rowKey)}>
        <td>
          <input
            type="checkbox"
            value={rowKey}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </td>
        {Object.values(rowData).map((value, index) => (
          <td key={`row-${index}-value`}>
            <h5>{value}</h5>
          </td>
        ))}
        <td>
          <div
            style={{ backgroundColor: "green", color: "white", padding: "5px" }}
          >
            Booked!
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>{headerItems}</tr>
        </thead>
        <tbody>{dataRows}</tbody>
      </table>
    </div>
  );
}

export default GridTable;
