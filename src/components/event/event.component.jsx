import React from "react";

import EventRace from "../event-race/event-race.component";

import {
  EventContainer,
  EventHeader,
  EventContent,
  EventName,
  Time
} from "./event.styles";

const Event = ({event}) => {
  return (
    <EventContainer>
      <EventHeader>
        <EventName>{event.name}</EventName>
        <Time>
          {event.from_date} - {event.to_date}{" "}
        </Time>
      </EventHeader>
      <EventContent>
        {event.races.map(race => {
          return <EventRace key={race.id} race={race} />;
        })}
      </EventContent>
    </EventContainer>
  );
};

export default Event;
