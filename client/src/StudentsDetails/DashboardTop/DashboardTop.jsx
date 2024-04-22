import { useState, useEffect } from "react";
import "./DashboardTop.css";
import AddButton from "./AddButton/AddButton";

function DashboardTop() {
  return (
    <div className="dashboardTop-bgd">
      <div className="dashboardTop-nameBoard">Roll NO</div>
      <div className="dashboardTop-studentCounter">Students Details</div>
      <div className="btn btn-light">
        <AddButton />
      </div>
    </div>
  );
}

export default DashboardTop;
