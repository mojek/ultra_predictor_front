import React from "react";
import { connect } from "react-redux";
import { PredictorButton, PredictionInfo } from "./race-prediction.styles";

import { loadPrediction } from "../../redux/prediction/prediction.actions";
class RacePrediction extends React.Component {
  state = {
    isPredicted: false
  };
  handlePredict = () => {
    const {
      loadPrediction,
      race: { id: raceId }
    } = this.props;
    loadPrediction(raceId, "00:54:00", "m", 1980);
    this.setState({ isPredicted: true });
  };
  render() {
    return this.state.isPredicted ? (
      <PredictionInfo>
        <span>twój przewidywany czas ukończenia</span>
        <h3>10:30:30</h3>
      </PredictionInfo>
    ) : (
      <PredictorButton onClick={this.handlePredict}>
        Uruchom <strong>Przepowiednie</strong>
      </PredictorButton>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadPrediction: (raceId, best10, sex, year_of_birth) =>
    dispatch(loadPrediction(raceId, best10, sex, year_of_birth))
});

export default connect(null, mapDispatchToProps)(RacePrediction);
