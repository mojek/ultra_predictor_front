import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RaceContainer } from "./race-page.styles";

import RaceInfo from "./../../components/race-info/race-info.component";
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
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  return { race: selectRace(ownProps.match.params.id)(state) };
};

export default connect(mapStateToProps)(RacePage);
