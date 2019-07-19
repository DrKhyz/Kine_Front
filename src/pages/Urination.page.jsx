import React from "react";
import { connect } from "react-redux";

import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import { volumes, urinations, contextsUrination } from "../data";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment,
  getContexts,
  updateNature
} from "../pills/event/event.action";
import ContextSelector from "../components/ContextSelector";
import "./layout.scss";
import {
  getEventDateSelector,
  getEventKindSelector,
  getEventMeasureSelector,
  getEventContextsSelector,
  getEventCommentSelector
} from "../pills/event/event.selector";

const Urination = ({
  updateDate,
  updateKind,
  getContexts,
  updateVolume,
  updateComment,
  date,
  kind,
  measure,
  contexts,
  comment,
  history
}) => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Miction"
          leftButtonInfo={{
            onClick: () => history.push("/history"),
            isVisible: true
          }}
          rightButtonInfo={{
            onClick: () => history.push("/events/summary"),
            isVisible: true,
            isActive: kind && measure ? true : false
          }}
        />
        <section className="pageBodyEvents">
          <DateAndTime date={date} handleChange={updateDate} />
          <div className="options">
            <OptionSelector
              title="Type d'envie"
              options={urinations}
              activeOption={kind}
              onClick={updateKind}
            />
            <ContextSelector
              title="Contexte"
              options={contextsUrination}
              contexts={contexts}
              onChange={getContexts}
            />
            <OptionSelector
              title="Volume"
              options={volumes}
              activeOption={measure}
              onClick={updateVolume}
              bold
            />
            <Comment
              title="Commentaire"
              commentText={comment}
              onChange={updateComment}
            />
          </div>
        </section>
      </div>
      <Navbar />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => dispatch(updateDate(date)),
    updateKind: kind => {
      dispatch(updateKind(kind));
      dispatch(updateNature("Miction"));
    },
    getContexts: (contexts, check) => dispatch(getContexts(contexts, check)),
    updateVolume: volume => dispatch(updateMeasure(volume)),
    updateComment: e => dispatch(updateComment(e.target.value))
  };
};

const mapStateToProps = state => ({
  date: getEventDateSelector(state),
  kind: getEventKindSelector(state),
  measure: getEventMeasureSelector(state),
  contexts: getEventContextsSelector(state),
  comment: getEventCommentSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Urination);
