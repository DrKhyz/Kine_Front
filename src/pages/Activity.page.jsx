import React from "react";
import { connect } from "react-redux";

import { volumes, activities } from "../data";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment,
  updateNature
} from "../pills/event/event.action";
import {
  getEventDateSelector,
  getEventKindSelector,
  getEventMeasureSelector,
  getEventCommentSelector
} from "../pills/event/event.selector";
import "./layout.scss";

const Activity = ({
  updateDate,
  updateKind,
  updateVolume,
  updateComment,
  date,
  kind,
  measure,
  comment,
  history
}) => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Sport"
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
              title="Durée"
              options={activities}
              activeOption={kind}
              onClick={updateKind}
            />
            <OptionSelector
              title="Intensité de l'effort"
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
      dispatch(updateNature("Activité"));
    },
    updateVolume: volume => dispatch(updateMeasure(volume)),
    updateComment: e => dispatch(updateComment(e.target.value))
  };
};

const mapStateToProps = state => ({
  date: getEventDateSelector(state),
  kind: getEventKindSelector(state),
  measure: getEventMeasureSelector(state),
  comment: getEventCommentSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
