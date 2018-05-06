import { User } from '@state/user/user.model';
import {
  AddUser,
  AddUserFail,
  AddUserSuccess,
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
import * as fromUser from './user.reducer';

describe('User Reducer', () => {
  let user: User = {
    id: 1,
    firstName: 'Anakin',
    lastName: 'Skywalker'
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = fromUser.reducer(undefined, action);
      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Add User', () => {
    it('should toggle loading state', () => {
      const action = new AddUser({ user });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Add User Success', () => {
    it('should add a user to state', () => {
      const action = new AddUserSuccess({ user });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Add User Fail', () => {
    it('should update error to state', () => {
      const action = new AddUserFail({ error: new Error() });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load User', () => {
    it('should toggle loading state', () => {
      const action = new LoadUser({ id: user.id });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load User Success', () => {
    it('should load a user to state', () => {
      const action = new LoadUserSuccess({ user });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load User Fail', () => {
    it('should update error in state', () => {
      const action = new LoadUserFail({ error: new Error() });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load Users', () => {
    it('should load a user to state', () => {
      const action = new LoadUsers();
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load Users Success', () => {
    it('should add all users to state', () => {
      const users = [user];
      const action = new LoadUsersSuccess({ users });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Load Users Fail', () => {
    it('should update error in state', () => {
      const users = [user];
      const action = new LoadUsersFail({ error: new Error() });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Update User', () => {
    it('should load a user to state', () => {
      const action = new UpdateUser({
        user: { ...user, firstName: 'Darth', lastName: 'Vader' }
      });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Update User Success', () => {
    it('should add all users to state', () => {
      const users = [user];
      const action = new UpdateUserSuccess({
        update: {
          id: user.id,
          changes: {
            ...user,
            firstName: 'Darth',
            lastName: 'Vader'
          }
        }
      });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Update User Fail', () => {
    it('should update error in state', () => {
      const users = [user];
      const action = new UpdateUserFail({ error: new Error() });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Update Users', () => {
    it('should load a user to state', () => {
      const action = new UpdateUsers({
        users: [{ ...user, firstName: 'Darth', lastName: 'Vader' }]
      });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Update Users Success', () => {
    it('should add all users to state', () => {
      const users = [user];
      const action = new UpdateUsersSuccess({
        update: [
          {
            id: user.id,
            changes: {
              ...user,
              firstName: 'Darth',
              lastName: 'Vader'
            }
          }
        ]
      });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('[User] Select User', () => {
    it('should set the selectedUserId property in state', () => {
      const action = new SelectUser({ id: user.id });
      const result = fromUser.reducer(fromUser.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });
});
