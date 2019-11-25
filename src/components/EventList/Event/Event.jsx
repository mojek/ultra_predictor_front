import React from "react";

import EventRace from "./EventRace/EventRace";

import {
  EventContainer,
  EventHeader,
  EventContent,
  EventName,
  Time
} from "./Event.styles";

const event = props => {
  return (
    <EventContainer>
      <EventHeader>
        <EventName>{props.event.name}</EventName>
        <Time>
          {props.event.from_date} - {props.event.to_date}{" "}
        </Time>
      </EventHeader>
      <EventContent>
        {props.event.races.map(race => {
          return <EventRace race={race} />;
        })}
      </EventContent>
    </EventContainer>
  );
};

export default event;
