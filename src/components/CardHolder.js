import React from "react";
import "./CardHolder.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardHolder() {
  return (
    <div className="cardHolder">
      <Link to="/quotation">
        <Card title="Quotation" height="80" width="400" />
      </Link>

      <Link to="/revenue">
        <Card title="Revenue" height="165" width="600" />
      </Link>

      <Link to="/salesreport">
        <Card title="Sales Report" height="165" width="400" />
      </Link>

      <Link to="/servicessold">
        <Card title="services sold" height="80" width="240" />
      </Link>

      <Link to="/latestmessages">
        <Card title="latest messages" height="250" width="350" />
      </Link>

      <Link to="/socialsource">
        <Card title="social source" height="165" width="640" />
      </Link>

      <Link to="/recentactivities">
        <Card title="recent activities" height="165" width="1010" />
      </Link>
    </div>
  );
}

export default CardHolder;
