import { createSelector } from "reselect";

const selectEvent = state => state.events;

export const selectEvents = createSelector(
    [selectEvent],
    aa => aa
)