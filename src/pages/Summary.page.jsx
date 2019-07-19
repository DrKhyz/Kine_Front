import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import SummaryItem from "../components/SummaryItem";
import Navbar from "../components/Navbar";
import SummaryContextItem from "../components/SummaryContextItem";
import TopBar from "../components/TopBar";
import { createEvent } from "../API/createEvent";
import "./Summary.page.scss";
import "./layout.scss";
import {
  getEventNatureSelector,
  getEventKindSelector,
  getEventDateSelector,
  getEventMeasureSelector,
  getEventContextsSelector,
  getEventCommentSelector
} from "../pills/event/event.selector";

const Drink = ({
  dispatch,
  date,
  nature,
  kind,
  measure,
  contexts,
  comment,
  history
}) => {
  return (
    <div className="page">
      {/* If kind or measure are not define, redirect to history page */}
      {!kind && !measure && history.push("/history")}

      <TopBar
        title="Résumé"
        leftButtonInfo={{
          onClick: () => history.goBack(),
          isVisible: true
        }}
        rightButtonInfo={{
          onClick: async () => {
            await createEvent(date, nature, kind, measure, contexts, comment);
            window.location.href = "/history"; //instead of history.push -> fix an infinite loop
          },
          isVisible: true,
          isActive: true
        }}
      />
      <section className="pageBodySummary">
        <SummaryItem
          label="Date"
          value={moment(date).format("dddd DD MMMM à HH:mm")}
        />
        <SummaryItem label="Type" value={kind} />
        <SummaryContextItem label="Contexte" values={contexts} />
        <SummaryItem label="Volume" value={measure} bold />
        <SummaryItem label="Commentaire" value={comment} />
      </section>
      <Navbar />
    </div>
  );
};

const mapStateToProps = state => ({
  date: getEventDateSelector(state),
  kind: getEventKindSelector(state),
  nature: getEventNatureSelector(state),
  measure: getEventMeasureSelector(state),
  contexts: getEventContextsSelector(state),
  comment: getEventCommentSelector(state)
});

export default connect(mapStateToProps)(Drink);
