import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { User } from './user.model';

export enum UserActionTypes {
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserFail = '[User] Load User Fail',
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFail = '[User] Load Users Fail',
  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserFail = '[User] Add User Fail',
  AddUsers = '[User] Add Users',
  AddUsersSuccess = '[User] Add Users Success',
  AddUsersFail = '[User] Add Users Fail',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFail = '[User] Update User Fail',
  UpdateUsers = '[User] Update Users',
  UpdateUsersSuccess = '[User] Update Users Success',
  UpdateUsersFail = '[User] Update Users Fail',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFail = '[User] Delete User Fail',
  DeleteUsers = '[User] Delete Users',
  ClearUsers = '[User] Clear Users',
  SelectUser = '[User] Select User'
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;

  constructor(public payload: { id: number }) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LoadUserFail;

  constructor(public payload: { error: Error }) {}
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;

  constructor(public payload: { users: User[] }) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LoadUsersFail;

  constructor(public payload: { error: Error }) {}
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: { user: Partial<User> }) {}
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.AddUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class AddUserFail implements Action {
  readonly type = UserActionTypes.AddUserFail;

  constructor(public payload: { error: Error }) {}
}

export class AddUsers implements Action {
  readonly type = UserActionTypes.AddUsers;

  constructor(public payload: { users: Partial<User>[] }) {}
}

export class AddUsersSuccess implements Action {
  readonly type = UserActionTypes.AddUsersSuccess;

  constructor(public payload: { users: User[] }) {}
}

export class AddUsersFail implements Action {
  readonly type = UserActionTypes.AddUsersFail;

  constructor(public payload: { error: Error }) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: { user: Partial<User> }) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;

  constructor(public payload: { update: Update<User> }) {}
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;

  constructor(public payload: { error: Error }) {}
}

export class UpdateUsers implements Action {
  readonly type = UserActionTypes.UpdateUsers;

  constructor(public payload: { users: Partial<User>[] }) {}
}

export class UpdateUsersSuccess implements Action {
  readonly type = UserActionTypes.UpdateUsersSuccess;

  constructor(public payload: { update: Update<User>[] }) {}
}

export class UpdateUsersFail implements Action {
  readonly type = UserActionTypes.UpdateUsersFail;

  constructor(public payload: { error: Error }) {}
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DeleteUserFail;

  constructor(public payload: { error: Error }) {}
}

export class DeleteUsers implements Action {
  readonly type = UserActionTypes.DeleteUsers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.ClearUsers;
}

export class SelectUser implements Action {
  readonly type = UserActionTypes.SelectUser;

  constructor(public payload: { id: number }) {}
}

export type UserActions =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | AddUser
  | AddUserSuccess
  | AddUserFail
  | AddUsers
  | AddUsersSuccess
  | AddUsersFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | UpdateUsers
  | UpdateUsersSuccess
  | UpdateUsersFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail
  | DeleteUsers
  | ClearUsers
  | SelectUser;
