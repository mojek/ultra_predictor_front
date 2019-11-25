import React, { Component } from "react";
import EventList from "../../components/EventList/EventList";
class EventBuilder extends Component {
  state = {
    events: [
      {
        name: "Festiwal biegów w Szczawnicy",
        from_date: "05.10.2019",
        to_date: "12.10.2019",
        races: [
          {
            name: "Wielka Prehyba",
            start_date: "12.10",
            distance: 64,
            elevation_increase: 1800,
            elevation_decrease: 1800,
            food_points: 3,
            itra: 3,
            time_limit: 10.5
          },
          {
            name: "Dziki Groń",
            start_date: "13.10",
            distance: 100,
            elevation_increase: 2800,
            elevation_decrease: 2800,
            food_points: 3,
            itra: 3,
            time_limit: 10.5
          }
        ]
      },
      {
        name: "VI Festiwal Biegu Rzeźnika",
        from_date: "06.06.2019",
        to_date: "12.06.2019",
        races: [
          {
            name: "Rzeźnik",
            start_date: "12.10",
            distance: 64,
            elevation_increase: 1800,
            elevation_decrease: 1800,
            food_points: 3,
            itra: 3,
            time_limit: 10.5
          },
          {
            name: "Rżeżnik SKY",
            start_date: "13.10",
            distance: 100,
            elevation_increase: 2800,
            elevation_decrease: 2800,
            food_points: 3,
            itra: 3,
            time_limit: 10.5
          }
        ]
      }
    ]
  };
  render() {
    return <EventList events={this.state.events} />;
  }
}

export default EventBuilder;
