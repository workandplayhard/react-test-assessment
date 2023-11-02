import ReservationData from "../reservationList.json";

// helper functions for functionalities
const reservations = ReservationData.reservations;

export const sortById = (data, sortType, setSortedData) => {
  const sortedData = data.slice(); // Create a copy of the data
  sortedData.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    if (sortType === "asc") {
      return idA - idB;
    } else if (sortType === "dsc") {
      return idB - idA; // Reverse the order for descending sort
    } else {
      return 0;
    }
  });

  if (setSortedData) {
    setSortedData(sortedData);
  }
  return sortedData;
};

export const sortByDate = (data, sortType, setSortedData) => {
  const newData = [...data];
  const sortedData = newData.sort((a, b) => {
    const dateA = new Date(parseBusinessDate(a.businessDate));
    const dateB = new Date(parseBusinessDate(b.businessDate));
    if (sortType === "asc") {
      return dateA - dateB;
    } else if (sortType === "dsc") {
      return dateB - dateA; // Reverse the order for descending sort
    } else {
      return 0;
    }
  });
  if (setSortedData) {
    setSortedData(sortedData);
  }
  return sortedData;
};
// Helper function to parse the businessDate into a valid date format
function parseBusinessDate(dateString) {
  const parts = dateString.split(".");
  if (parts.length === 3) {
    // Assume the format is "dd.mm.yyyy"
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-based
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }
  // Return an invalid date for unrecognized formats
  return new Date("Invalid Date");
}

export const sortByName = (data, sortType, setSortedData) => {
  const newData = [...data];
  const sortedData = newData?.sort((a, b) => {
    const firstNameA = a?.customer?.firstName?.toLowerCase();
    const lastNameA = a?.customer?.lastName?.toLowerCase();
    const firstNameB = b?.customer?.firstName?.toLowerCase();
    const lastNameB = b?.customer?.lastName?.toLowerCase();
    if (sortType === "asc") {
      if (firstNameA !== firstNameB) {
        return firstNameA.localeCompare(firstNameB);
      } else {
        return lastNameA.localeCompare(lastNameB);
      }
    } else if (sortType === "dsc") {
      if (firstNameA !== firstNameB) {
        return firstNameB.localeCompare(firstNameA);
      } else {
        return lastNameB.localeCompare(lastNameA);
      }
    } else {
      return 0;
    }
  });
  if (setSortedData) {
    setSortedData(sortedData);
  }
  return sortedData;
};
// Extract status values into an array
const statusValues = reservations.map((reservation) => reservation.status);
// Use a Set to filter out unique status values
export const uniqueStatusValues = [...new Set(["All Status", ...statusValues])];
const shiftValues = reservations.map((reservation) => reservation.shift);
// Use a Set to filter out unique shift values
export const uniqueShiftValues = [...new Set(["All Shifts", ...shiftValues])];
const areaValues = reservations.map((reservation) => reservation.area);
// Use a Set to filter out unique area values
export const uniqueAreaValues = [...new Set(["All Areas", ...areaValues])];

export const filterByStatus = (data, status) => {
  if (status === "All Status") {
    return data; // Return the original data if "All Status" is selected
  }
  return data.filter((reservation) => reservation.status === status);
};

export const filterByArea = (data, area) => {
  if (area === "All Areas") {
    return data; // Return the original data if "All Status" is selected
  }
  return data.filter((reservation) => reservation.area === area);
};

export const filterByShifts = (data, shift) => {
  if (shift === "All Shifts") {
    return data; // Return the original data if "All Status" is selected
  }
  return data.filter((reservation) => reservation.shift === shift);
};

// search filter function
export const handleSearchSortedData = (
  allData,
  sortedSearchData,
  setSearchSortedData,
  searchKeyword
) => {
  const filteredData = allData?.filter((data) => {
    if (!searchKeyword || searchKeyword?.length < 1) {
      return sortedSearchData;
    } else {
      const searchLower = searchKeyword.toLowerCase();
      const customerName =
        `${data.customer?.firstName} ${data.customer?.lastName}`.toLowerCase();
      return customerName.includes(searchLower);
    }
  });
  setSearchSortedData(filteredData);
};

export const filterDataByDate = (allData, filterDate) => {
  return allData?.filter((data) => {
    const businessDate = data.businessDate;
    // Assuming filterDate is a string in the format 'DD.MM.YYYY'
    return (
      new Date(parseBusinessDate(businessDate)).toDateString() ===
      new Date(filterDate).toDateString()
    );
  });
};
