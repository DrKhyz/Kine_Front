import React from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import { volumes, urinations, contextUrination } from "../data";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment,
  updateContext,
  updateNature
} from "../pills/event/event.action";
import ContextSelector from "../components/ContextSelector";
import "./layout.scss";

const Urination = ({
  updateDate,
  updateKind,
  updateContext,
  updateVolume,
  updateComment,
  date,
  kind,
  measure,
  context,
  comment,
  history
}) => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Miction"
          leftButtonInfo={{
            // text: "Annuler",
            onClick: () => history.push("/history"),
            isVisible: true
          }}
          rightButtonInfo={{
            // text: "Suivant",
            onClick: () => history.push("/events/summary"),
            isVisible: true,
            isActive: kind && measure ? true : false
          }}
        />
        <section className="pageBody">
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
              options={contextUrination}
              context={context}
              onChange={updateContext}
            />
            <OptionSelector
              title="Volume"
              options={volumes}
              activeOption={measure}
              onClick={updateVolume}
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
    updateContext: (context, check) => dispatch(updateContext(context, check)),
    updateVolume: volume => dispatch(updateMeasure(volume)),
    updateComment: e => dispatch(updateComment(e.target.value))
  };
};

const mapStateToProps = state => ({
  date: state.EventReducer.date,
  kind: state.EventReducer.kind,
  measure: state.EventReducer.measure,
  context: state.EventReducer.context,
  comment: state.EventReducer.comment
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Urination);
