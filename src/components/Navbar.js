import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Avatar } from "@material-ui/core";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <CheckBoxIcon />
        <h2>LOGO</h2>
      </div>

      <div className="icons">
        <AnnouncementIcon className="icon" />
        <NotificationsIcon className="icon" />
        <AddIcon className="icon" />
        <Avatar className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
