import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from '@core/services/user.service';
import { cold, hot } from 'jasmine-marbles';
import { Observable, empty } from 'rxjs';
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
  UpdateUser,
  UpdateUserFail,
  UpdateUserSuccess
} from './user.actions';
import { UserEffects } from './user.effects';
import { generateUser, generateUsers } from './user.model';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let effects: UserEffects;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions)
        {
          provide: UserService,
          useValue: {
            addUser: jest.fn(),
            getUser: jest.fn(),
            getUsers: jest.fn(),
            updateUser: jest.fn()
          }
        }
      ]
    });

    effects = TestBed.get(UserEffects);
    userService = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('addUser', () => {
    it('should return an AddUserSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = new AddUser({ user });
      const outcome = new AddUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      userService.addUser = jest.fn(() => response);

      expect(effects.addUser).toBeObservable(expected);
    });

    it('should return an AddUserFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = new AddUser({ user });
      const error = new Error();
      const outcome = new AddUserFail({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--(b|)', { b: outcome });
      userService.addUser = jest.fn(() => response);

      expect(effects.addUser).toBeObservable(expected);
    });
  });

  describe('loadUsers', () => {
    it('should return a LoadUsersSuccess action, with the users, on success', () => {
      const users = generateUsers();
      const action = new LoadUsers();
      const outcome = new LoadUsersSuccess({ users: users });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: users });
      const expected = cold('--b', { b: outcome });
      userService.getUsers = jest.fn(() => response);

      expect(effects.loadUsers).toBeObservable(expected);
    });

    it('should return a LoadUsersFail action, with an error, on failure', () => {
      const action = new LoadUsers();
      const error = new Error();
      const outcome = new LoadUsersFail({ error: error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--(b|)', { b: outcome });
      userService.getUsers = jest.fn(() => response);

      expect(effects.loadUsers).toBeObservable(expected);
    });
  });

  describe('loadUser', () => {
    it('should return a LoadUserSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = new LoadUser({ id: user.id });
      const outcome = new LoadUserSuccess({ user });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      userService.getUser = jest.fn(() => response);

      expect(effects.loadUser).toBeObservable(expected);
    });

    it('should return a LoadUserFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = new LoadUser({ id: user.id });
      const error = new Error();
      const outcome = new LoadUserFail({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--(b|)', { b: outcome });
      userService.getUser = jest.fn(() => response);

      expect(effects.loadUser).toBeObservable(expected);
    });
  });

  describe('updateUser', () => {
    it('should return an UpdateUserSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = new UpdateUser({ user });
      const outcome = new UpdateUserSuccess({
        update: {
          id: user.id,
          changes: user
        }
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: outcome });
      userService.updateUser = jest.fn(() => response);

      expect(effects.updateUser).toBeObservable(expected);
    });

    it('should return an UpdateUserFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = new UpdateUser({ user });
      const error = new Error();
      const outcome = new UpdateUserFail({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--(b|)', { b: outcome });
      userService.updateUser = jest.fn(() => response);

      expect(effects.updateUser).toBeObservable(expected);
    });
  });
});
