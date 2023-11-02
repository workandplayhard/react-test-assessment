import React from "react";
import { DatePicker } from "../DatePicker";
import { SearchBar } from "../SearchBar";
import { AreaDropdown } from "../AreaDropdown";
import { ShiftDropdown } from "../ShiftDropdown";
import { StatusDropdown } from "../StatusDropdown";

export const FilterToolbar = (props) => {
  const { sortedData, setSortedData, reservations } = props;

  return (
    <div className="container-fluid">
      <div className="headingTbL filterResponsiveCus filterMain">
        <span className="search-container">
          <div className="respoCusBottom">
            {/* Date picker component */}
            <DatePicker
              setSortedData={setSortedData}
              reservations={reservations}
            />
            {/* Date picker component */}
            {/* Area dropdown */}
            <AreaDropdown
              setSortedData={setSortedData}
              reservations={reservations}
            />
            {/* Area dropdown */}
            {/* shift dropdown */}
            <ShiftDropdown
              reservations={reservations}
              setSortedData={setSortedData}
            />
            {/* shift dropdown */}
            {/* status dropdown */}
            <StatusDropdown
              reservations={reservations}
              setSortedData={setSortedData}
            />
            {/* status dropdown */}
          </div>
          {/* Search component */}
          <SearchBar
            name="Search"
            reservations={reservations}
            sortedData={sortedData}
            setSortedData={setSortedData}
          />
          {/* Search component */}
        </span>
      </div>
    </div>
  );
};
