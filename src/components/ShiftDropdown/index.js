import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { filterByShifts } from "../../utils/helperFunctions";
import { shiftList } from "../../utils/constants";

export const ShiftDropdown = ({ setSortedData, reservations }) => {
  const [shiftFilter, setShiftFilter] = useState(shiftList[0]);

  return (
    <Dropdown
      drop
      className="dropdown"
      onSelect={(e) => {
        setShiftFilter(e);
        setSortedData(filterByShifts(reservations, e));
      }}
    >
      <span className="sortingShow">
        <Dropdown.Toggle defaultValue={"All"}>
          <span>{shiftFilter}</span>
        </Dropdown.Toggle>
      </span>
      <Dropdown.Menu
        variant=""
        id="style-5"
        className="customDropdown"
        defaultValue={shiftList[0]}
      >
        {shiftList.map((shiftType, index) => (
          <Dropdown.Item
            eventKey={shiftType}
            key={`shiftType + ${index}`}
            className="text-uppercase"
          >
            {shiftType}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
