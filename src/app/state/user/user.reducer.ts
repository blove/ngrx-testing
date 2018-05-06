import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { UserActionTypes, UserActions } from './user.actions';
import { User } from './user.model';

export interface State extends EntityState<User> {
  error?: Error;
  loading: boolean;
  selectedUserId: number;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  selectedUserId: null
});

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.AddUser:
    case UserActionTypes.AddUsers:
    case UserActionTypes.LoadUser:
    case UserActionTypes.LoadUsers:
    case UserActionTypes.UpdateUser:
    case UserActionTypes.UpdateUsers: {
      return { ...state, loading: true, error: undefined };
    }

    case UserActionTypes.AddUserSuccess:
    case UserActionTypes.LoadUserSuccess: {
      return adapter.addOne(action.payload.user, { ...state, loading: false });
    }

    case UserActionTypes.AddUserFail:
    case UserActionTypes.AddUsersFail:
    case UserActionTypes.LoadUserFail:
    case UserActionTypes.LoadUsersFail:
    case UserActionTypes.UpdateUserFail:
    case UserActionTypes.UpdateUsersFail: {
      return { ...state, error: action.payload.error, loading: false };
    }

    case UserActionTypes.AddUsersSuccess: {
      return adapter.addMany(action.payload.users, {
        ...state,
        loading: false
      });
    }

    case UserActionTypes.UpdateUserSuccess: {
      return adapter.updateOne(action.payload.update, {
        ...state,
        loading: false
      });
    }

    case UserActionTypes.UpdateUsersSuccess: {
      return adapter.updateMany(action.payload.update, {
        ...state,
        loading: false
      });
    }

    case UserActionTypes.DeleteUser: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserActionTypes.DeleteUsers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserActionTypes.LoadUsersSuccess: {
      return adapter.addAll(action.payload.users, { ...state, loading: false });
    }

    case UserActionTypes.ClearUsers: {
      return adapter.removeAll(state);
    }

    case UserActionTypes.SelectUser: {
      return { ...state, selectedUserId: action.payload.id };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedUserId = (state: State) => state.selectedUserId;

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal
} = adapter.getSelectors();
