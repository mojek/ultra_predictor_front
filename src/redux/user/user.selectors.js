import { createSelector } from "reselect";

const selectUser = state => state.user;
export const selectUserInfo = createSelector(
  [selectUser],
  user => user
);
