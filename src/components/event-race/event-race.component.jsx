import React from "react";
import { Link } from "react-router-dom";
import { RaceContainer } from "./event-race.style";
import RaceInfo from "./../race-info/race-info.component"
const eventRace = ({ race }) => {
  return (
    <RaceContainer>
      <Link to={`/race/${race.id}`}>
        <h4>{race.name}</h4>
      </Link>
      <RaceInfo race={race} />
     
    </RaceContainer>
  );
};

export default eventRace;
