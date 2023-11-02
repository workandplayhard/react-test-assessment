import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { handleSearchSortedData } from "../../utils/helperFunctions";

export const SearchBar = ({ reservations, sortedData, setSortedData }) => {
  const { t } = useTranslation();
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (searchKeyword.length < 1) {
      setSortedData(reservations);
    }
  }, [reservations, searchKeyword, setSortedData]);

  return (
    <div className="searchFilter">
      {t("Search.label")}
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
        placeholder={t("Search.search_placeholder")}
      />
      <i
        className={`fa fa-search ${searchKeyword ? "" : "cursor-no-drop"}`}
        onClick={() => {
          if (searchKeyword.length >= 1) {
            handleSearchSortedData(
              reservations,
              sortedData,
              setSortedData,
              searchKeyword
            );
          }
        }}
      />
    </div>
  );
};
