import { useState, useEffect } from "react";
import "./Dashboard.css";
import DashboardTop from "./DashboardTop/DashboardTop.jsx";
import StudentListing from "./StudentListing/StudentListing.jsx";

function Dashboard() {
  const [count, setCount] = useState(19);

  return (
    <div className="dashboard-bgd">
      {/* <div className="dashboard-home">
        <StudentListing className="dashboard-components" />
      </div> */}
      <ul class="list-group">
        <li class="list-group-item">
          <DashboardTop className="dashboard-components" />
        </li>
        <li class="list-group-item">
          <StudentListing className="dashboard-components" />
        </li>
      </ul>
    </div>
  );
}
//students
export default Dashboard;
