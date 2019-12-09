import React from "react";
import { RaceContainer } from "./race-info.styles";
const raceInfo = ({ race }) => {
  return (
    <RaceContainer>
        <div className="d-flex justify-content-between race-info-container">
        <div className="race-info">
          <span>start</span>
          {race.start_date}
        </div>

        <div className="race-info">
          <span>przewyższenia</span>
          {race.elevation_gain}+/
          {race.elevation_lost}-
        </div>
        <div className="race-info">
          <span>dystans</span>
          <strong>{race.distance}km</strong>
        </div>
        <div className="race-info">
          <span>itra</span>
          {race.itra}
        </div>
        <div className="race-info">
          <span>punkty odżywcze</span>
          {race.food_point}
        </div>
        <div className="race-info">
          <span>limit</span>
          {race.time_limit}h
        </div>
      </div>
    </RaceContainer>
  );
};

export default raceInfo;
