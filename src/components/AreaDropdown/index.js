import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { filterByArea } from "../../utils/helperFunctions";
import { areaList } from "../../utils/constants";

export const AreaDropdown = ({ setSortedData, reservations }) => {
  const [areaFilter, setAreaFilter] = useState(areaList[0]);

  return (
    <Dropdown
      drop
      className="dropdown"
      onSelect={(e) => {
        setAreaFilter(e);
        setSortedData(filterByArea(reservations, e));
      }}
    >
      <span className="sortingShow">
        <Dropdown.Toggle defaultValue={"All"}>
          <span>{areaFilter}</span>
        </Dropdown.Toggle>
      </span>
      <Dropdown.Menu
        variant=""
        id="style-5"
        className="customDropdown"
        defaultValue={areaList[0]}
      >
        {areaList.map((areaType, index) => (
          <Dropdown.Item
            eventKey={areaType}
            key={`areaType + ${index}`}
            className="text-uppercase"
          >
            {areaType}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
