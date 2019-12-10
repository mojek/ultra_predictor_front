import React from "react";
import { connect } from "react-redux";

import RaceInfo from "./../../components/race-info/race-info.component";
import RacePrediction from "../../components/race-prediction/race-prediction.component"
import { selectRace } from "../../redux/event/event.selectors";

import Card from "react-bootstrap/Card";
const RacePage = ({ race }) => {
  return (
    <div>
      <h4>{race.name}</h4>
      <Card className="mb-4">
        <Card.Body>
          <RaceInfo race={race} />
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body className="text-center">
          <RacePrediction race={race} />
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  return { race: selectRace(ownProps.match.params.id)(state) };
};

export default connect(mapStateToProps)(RacePage);
