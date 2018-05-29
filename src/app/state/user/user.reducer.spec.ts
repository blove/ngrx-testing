import { User } from '@state/user/user.model';
import {
  AddUser,
  AddUserFail,
  AddUserSuccess,
  AddUsersSuccess,
  LoadUser,
  LoadUserFail,
  LoadUserSuccess,
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
  SelectUser,
  UpdateUser,
  UpdateUserFail,
  UpdateUserSuccess,
  UpdateUsers,
  UpdateUsersSuccess
} from './user.actions';
import { initialState, reducer } from './user.reducer';

describe('User Reducer', () => {
  const user: User = {
    id: 1,
    firstName: 'Anakin',
    lastName: 'Skywalker'
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[User] Add User', () => {
    it('should toggle loading state', () => {
      const action = new AddUser({ user });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Add User Success', () => {
    it('should add a user to state', () => {
      const action = new AddUserSuccess({ user });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: {
          [user.id]: user
        },
        ids: [user.id],
        loading: false
      });
    });
  });

  describe('[User] Add User Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new AddUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Load User', () => {
    it('should toggle loading state', () => {
      const action = new LoadUser({ id: user.id });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Load User Success', () => {
    it('should load a user to state', () => {
      const action = new LoadUserSuccess({ user });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: {
          [user.id]: user
        },
        ids: [user.id],
        loading: false
      });
    });
  });

  describe('[User] Load User Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = new LoadUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Load Users', () => {
    it('should toggle loading state', () => {
      const action = new LoadUsers();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Load Users Success', () => {
    it('should add all users to state', () => {
      const users = [user];
      const action = new LoadUsersSuccess({ users });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        entities: users.reduce(
          (entityMap, user) => ({
            ...entityMap,
            [user.id]: user
          }),
          {}
        ),
        ids: users.map(user => user.id),
        loading: false
      });
    });
  });

  describe('[User] Load Users Fail', () => {
    it('should update error in state', () => {
      const users = [user];
      const error = new Error();
      const action = new LoadUsersFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Update User', () => {
    it('should toggle loading state', () => {
      const action = new UpdateUser({
        user: { ...user, firstName: 'Darth', lastName: 'Vader' }
      });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Update User Success', () => {
    it('should update user in state', () => {
      const updatedUser: User = {
        ...user,
        firstName: 'Darth',
        lastName: 'Vader'
      };
      const action = new UpdateUserSuccess({
        update: {
          id: user.id,
          changes: updatedUser
        }
      });

      const state = reducer(initialState, new AddUserSuccess({ user }));
      expect(state).toEqual({
        ...initialState,
        entities: {
          [user.id]: user
        },
        ids: [user.id],
        loading: false
      });

      const result = reducer(state, action);
      expect(result).toEqual({
        ...state,
        entities: {
          ...state.entities,
          [user.id]: updatedUser
        },
        ids: [...state.ids],
        loading: false
      });
    });
  });

  describe('[User] Update User Fail', () => {
    it('should update error in state', () => {
      const users = [user];
      const error = new Error();
      const action = new UpdateUserFail({ error });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error,
        loading: false
      });
    });
  });

  describe('[User] Update Users', () => {
    it('should toggle loading state', () => {
      const action = new UpdateUsers({
        users: [{ ...user, firstName: 'Darth', lastName: 'Vader' }]
      });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        error: undefined,
        loading: true
      });
    });
  });

  describe('[User] Update Users Success', () => {
    it('should add all users to state', () => {
      const senator = {
        id: 2,
        firstName: 'Sheev',
        lastName: 'Palpaatine'
      };
      const vader = {
        ...user,
        firstName: 'Darth',
        lastName: 'Vader'
      };
      const sidious = {
        ...senator,
        firstName: 'Darth',
        lastName: 'Sidious'
      };
      const originalUsers = [user, senator];
      const updatedUsers = [vader, sidious];

      const state = reducer(
        initialState,
        new AddUsersSuccess({
          users: originalUsers
        })
      );

      const action = new UpdateUsersSuccess({
        update: [
          {
            id: user.id,
            changes: vader
          },
          {
            id: senator.id,
            changes: sidious
          }
        ]
      });
      const result = reducer(state, action);

      expect(result).toEqual({
        ...state,
        entities: updatedUsers.reduce(
          (entityMap, user) => ({
            ...entityMap,
            [user.id]: user
          }),
          {}
        ),
        ids: updatedUsers.map(user => user.id),
        loading: false
      });
    });
  });

  describe('[User] Select User', () => {
    it('should set the selectedUserId property in state', () => {
      const action = new SelectUser({ id: user.id });
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        selectedUserId: user.id
      });
    });
  });
});
