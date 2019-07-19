import React from "react";

import Navbar from "../components/Navbar";
import EventsDateSelector from "../components/EventsDateSelector";
import TopBar from "../components/TopBar";
import EventsContainer from "../pills/events/events.container";

import "./layout.scss";
import "./History.page.scss";

const History = () => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Historique"
          leftButtonInfo={{ isVisible: false }}
          rightButtonInfo={{ isVisible: false }}
        />
        <section className="pageBodyHistory">
          <EventsDateSelector />
          <EventsContainer />
        </section>
      </div>
      <Navbar />
    </>
  );
};

export default History;
