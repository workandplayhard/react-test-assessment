import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import { filterDataByDate } from "../../utils/helperFunctions";

export const DatePicker = ({ setSortedData, reservations }) => {
  const { t } = useTranslation();
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    if (filterDate) {
      const filteredData = filterDataByDate(reservations, filterDate);
      setSortedData(filteredData);
    }
  }, [filterDate, reservations, setSortedData]);

  useEffect(() => {
    if (!filterDate) {
      setSortedData(reservations);
    }
  }, [filterDate, reservations, setSortedData]);

  return (
    <ReactDatePicker
      name="filterDate"
      dateFormat="dd-MM-yyyy"
      placeholderText={t("DatePicker.placeholder")}
      className="dateFilter"
      selected={filterDate}
      showIcon={true}
      onChange={setFilterDate}
      clearButtonTitle="X"
      isClearable
      showYearDropdown
      showMonthDropdown
    />
  );
};
