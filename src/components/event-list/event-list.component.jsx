import React from "react";
import Event from "../event/event.component";
import { EventListContainer } from "./event-list.styles";

const eventList = props => {
  return (
    <EventListContainer>
      {props.events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </EventListContainer>
  );
};

export default eventList;
