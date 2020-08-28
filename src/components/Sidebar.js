import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <SidebarRow title="Dashboard" />
      </Link>
      <Link to="/university">
        <SidebarRow title="University" />
      </Link>
      <Link to="/system">
        <SidebarRow title="System" />
      </Link>
    </div>
  );
}

export default Sidebar;
