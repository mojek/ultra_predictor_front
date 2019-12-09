import React from "react";
import Moment from "react-moment";
import EventRace from "../event-race/event-race.component";
import Card from "react-bootstrap/Card";
import { EventContainer } from "./event.styles";


const Event = ({ event }) => {
  return (
    <EventContainer>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-uppercase">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
              <h2>{event.name}</h2>
              <div className="h6 m-0 event-date">
                <Moment format="DD.MM.YYYY">{event.start_date}</Moment>
                {event.start_date !== event.end_date && (
                  <Moment format="DD.MM.YYYY">{event.end_date}</Moment>
                )}
              </div>
            </div>
          </Card.Title>

          <div>
            {event.races.map(race => {
              return <EventRace key={race.id} race={race} />;
            })}
          </div>
        </Card.Body>
      </Card>
    </EventContainer>
  );
};

export default Event;
