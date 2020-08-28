import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import CardHolder from "./components/CardHolder";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import University from "./Pages/University";
import Dashboard from "./Pages/Dashboard";

import Quotation from "./Pages/Quotation";

import SalesReport from "./Pages/SalesReport";
import ServicesSold from "./Pages/ServicesSold";
import RecentActivity from "./Pages/RecentActivity";
import LatestMessages from "./Pages/LatestMessages";
import SocialSource from "./Pages/SocialSource";
import Systemm from "./Pages/Systemm";
import Revenu from "./Pages/Revenu";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Router>
        <Switch>
          <Route path="/dashboard">
            <div>
              <Dashboard />
            </div>
          </Route>

          <Route path="/revenue">
            <div>
              <Revenu />
            </div>
          </Route>

          <Route path="/university">
            <div>
              <University />
            </div>
          </Route>

          <Route path="/system">
            <div>
              <Systemm />
            </div>
          </Route>

          <Route path="/quotation">
            <div>
              <Quotation />
            </div>
          </Route>

          <Route path="/salesreport">
            <div>
              <SalesReport />
            </div>
          </Route>

          <Route path="/servicessold">
            <div>
              <ServicesSold />
            </div>
          </Route>

          <Route path="/recentactivities">
            <div>
              <RecentActivity />
            </div>
          </Route>

          <Route path="/latestmessages">
            <div>
              <LatestMessages />
            </div>
          </Route>

          <Route path="/socialsource">
            <div>
              <SocialSource />
            </div>
          </Route>

          <Route path="/">
            <div className="appBody">
              <Sidebar />
              <CardHolder />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
