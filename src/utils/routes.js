import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReservationListView } from "../pages";

export const Router = () => {
  return (
    <React.Fragment>
      {/* Initial routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReservationListView />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
