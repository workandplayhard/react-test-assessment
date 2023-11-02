import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { filterByStatus } from "../../utils/helperFunctions";
import { statusList } from "../../utils/constants";

export const StatusDropdown = ({ setSortedData, reservations }) => {
  const [statusFilter, setStatusFilter] = useState(statusList[0]);

  return (
    <Dropdown
      drop
      className="dropdown"
      onSelect={(e) => {
        setStatusFilter(e);
        setSortedData(filterByStatus(reservations, e));
      }}
    >
      {" "}
      <span className="sortingShow">
        <Dropdown.Toggle defaultValue={"All"}>
          <span>{statusFilter}</span>
        </Dropdown.Toggle>
      </span>
      <Dropdown.Menu
        variant=""
        id="style-5"
        className="customDropdown"
        defaultValue={statusList[0]}
      >
        {statusList.map((statusType, index) => (
          <Dropdown.Item
            eventKey={statusType}
            key={`statusType+${index}`}
            className="text-uppercase"
          >
            {statusType}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
