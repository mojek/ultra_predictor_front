import React from "react";
import { RaceContainer, RaceHeader, RaceContent, RaceContentElement } from "./EventRace.style";
const eventRace = props => {
  return (
    <RaceContainer>
      <RaceHeader>
        {props.race.start_date} {props.race.name}
      </RaceHeader>
      <RaceContent>
        <RaceContentElement>
          elevation: {props.race.elevation_increase}+/
          {props.race.elevation_decrease}-
        </RaceContentElement>
        <RaceContentElement>
          distance: {props.race.distance}km
        </RaceContentElement>
        <RaceContentElement>
          itra: {props.race.itra}
        </RaceContentElement>
        <RaceContentElement>
          food points: {props.race.food_points}
        </RaceContentElement>
        <RaceContentElement>
          time limit: {props.race.time_limit}h
        </RaceContentElement>
      </RaceContent>
    </RaceContainer>
  );
};

export default eventRace;
