import { createSelector } from "reselect";

const selectEvent = state => state.events;

export const selectEvents = createSelector(
  [selectEvent],
  eventState => eventState.data
);

export const selectEventLoadingStatus = createSelector(
  [selectEvent],
  eventState => eventState.isLoading
);

const searchRace = (race_id, events) => {
  for (const event of events.data) {
    for (const race of event.races) {
      const race_found = race.id === race_id ? race : null;
      return race_found;
    }
  }
};

export const selectRace = raceParam =>
  createSelector([selectEvent], events => searchRace(raceParam, events));
