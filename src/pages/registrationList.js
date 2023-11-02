import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { sortByDate, sortById, sortByName } from "../utils/helperFunctions";
import {
  AscendingSortButton,
  DescendingSortButton,
  FilterToolbar,
} from "../components";
import reservations from "../reservationList.json";

export const ReservationListView = () => {
  const { t } = useTranslation(); // For translation of static texts
  const [sortedData, setSortedData] = useState(reservations.reservations); // Initialize with all reservations

  return (
    <div className="main-container">
      <FilterToolbar
        sortedData={sortedData}
        setSortedData={setSortedData}
        reservations={reservations.reservations}
      />
      <div className="container-fluid">
        <div className="table-container">
          <div className="table-responsive table-striped ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    {t("TableHeaders.id")}
                    <span className="sortingIcon">
                      <AscendingSortButton
                        onClick={() => {
                          sortById(sortedData, "asc", setSortedData);
                        }}
                      />
                      <DescendingSortButton
                        onClick={() => {
                          sortById(sortedData, "dsc", setSortedData);
                        }}
                      />
                    </span>
                  </th>
                  <th>
                    {t("TableHeaders.customer_name")}
                    <span className="sortingIcon">
                      <AscendingSortButton
                        onClick={() => {
                          sortByName(sortedData, "asc", setSortedData);
                        }}
                      />
                      <DescendingSortButton
                        onClick={() => {
                          sortByName(sortedData, "dsc", setSortedData);
                        }}
                      />
                    </span>
                  </th>
                  <th>
                    {t("TableHeaders.business_date")}
                    <span className="sortingIcon">
                      <AscendingSortButton
                        onClick={() => {
                          sortByDate(sortedData, "asc", setSortedData);
                        }}
                      />
                      <DescendingSortButton
                        onClick={() => {
                          sortByDate(sortedData, "dsc", setSortedData);
                        }}
                      />
                    </span>
                  </th>
                  <th>{t("TableHeaders.shift")}</th>
                  <th>{t("TableHeaders.area")}</th>
                  <th>{t("TableHeaders.status")}</th>
                </tr>
              </thead>
              <tbody>
                {sortedData?.length > 0 ? (
                  sortedData?.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>
                        {reservation.id < 10
                          ? "0" + reservation.id
                          : reservation.id}
                      </td>
                      <td>
                        {reservation.customer
                          ? reservation.customer.firstName +
                            " " +
                            reservation.customer.lastName
                          : "N/A"}
                      </td>
                      <td>{reservation.businessDate}</td>
                      <td>{reservation.shift}</td>
                      <td>{reservation.area}</td>
                      <td className="text-uppercase font-weight-bold">
                        {reservation.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      {t("TableBody.no_records_found")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
