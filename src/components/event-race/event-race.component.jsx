import React from "react";
import { RaceContainer, RaceHeader, RaceContent, RaceContentElement } from "./event-race.style";
const eventRace = ({race}) => {
  return (
    <RaceContainer>
      <RaceHeader>
        {race.start_date} {race.name}
      </RaceHeader>
      <RaceContent>
        <RaceContentElement>
          elevation: {race.elevation_increase}+/
          {race.elevation_decrease}-
        </RaceContentElement>
        <RaceContentElement>
          distance: {race.distance}km
        </RaceContentElement>
        <RaceContentElement>
          itra: {race.itra}
        </RaceContentElement>
        <RaceContentElement>
          food points: {race.food_points}
        </RaceContentElement>
        <RaceContentElement>
          time limit: {race.time_limit}h
        </RaceContentElement>
      </RaceContent>
    </RaceContainer>
  );
};

export default eventRace;
