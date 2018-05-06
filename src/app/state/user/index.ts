import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '@state/user/user.reducer';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<State>('user');

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectSelectedUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);
export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedUserId) => entities && entities[selectedUserId]
);
