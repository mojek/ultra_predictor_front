import React from "react";
import Event from "./Event/Event";
import { EventListContainer } from "./EventList.styles";

const eventList = props => {
  return (
    <EventListContainer>
      {props.events.map(event => (
        <Event event={event} />
      ))}
    </EventListContainer>
  );
};

export default eventList;
