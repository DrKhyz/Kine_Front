import React from "react";
import EventRow from "../../components/EventRow";
import moment from "moment";
import "moment/locale/fr";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import HistoryFirstCo from "../../components/HistoryFirstCo";
import { deleteEvent } from "../../API/deleteEvent";

const DELETE = "Supprimer";
const swipeoutStyle = { margin: "2px", backgroundColor: "red", color: "white" };

const EventsView = ({ events, getEvents }) => {
  return (
    <>
      {events.length === 0 ? (
        <HistoryFirstCo />
      ) : (
        events.map(event => (
          <Swipeout
            key={event.id}
            autoClose
            right={[
              {
                text: DELETE,
                onPress: async () => {
                  await deleteEvent(event.id);
                  await getEvents();
                },
                style: swipeoutStyle
              }
            ]}
          >
            <EventRow
              date={moment(event.date).format("HH:mm")}
              type={event.type}
              nature={event.nature}
              volume={event.volume}
              contexts={event.contexts}
              comment={event.comment}
            />
          </Swipeout>
        ))
      )}
    </>
  );
};

export default EventsView;
