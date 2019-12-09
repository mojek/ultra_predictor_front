import { createSelector } from "reselect";

const selectEvent = state => state.events;

export const selectEvents = createSelector(
  [selectEvent],
  eventState => eventState.data
);
// const searchRace = (race_id, events) => {
//   events.data.find(event => {
//     return event.races.some(race => {
//        console.log(race, race_id);
//       return race.id === race_id;
//     });
//   });
// };

const searchRace = (race_id, events) => {
  for (const easd of events.data) {
    for (const race of easd.races) {
      const race_found = race.id === race_id ? race : null;
      return race_found;
    }
  }
};

export const selectRace = raceParam =>
  createSelector([selectEvent], events => searchRace(raceParam, events));
