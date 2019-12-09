import React from "react";
import Event from "../event/event.component";
import { EventListContainer } from "./event-list.styles";

const eventList = ({events}) => {
  return (
    <EventListContainer>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </EventListContainer>
  );
};

export default eventList;
