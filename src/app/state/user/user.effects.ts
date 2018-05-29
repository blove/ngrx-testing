import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
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
  UpdateUserSuccess,
  UserActionTypes
} from './user.actions';

@Injectable()
export class UserEffects {
  @Effect()
  addUser: Observable<Action> = this.actions$
    .ofType<AddUser>(UserActionTypes.AddUser)
    .pipe(
      map(action => action.payload),
      exhaustMap(payload => this.userService.addUser(payload.user)),
      map(user => new AddUserSuccess({ user })),
      catchError(error => of(new AddUserFail({ error })))
    );

  @Effect()
  loadUser: Observable<Action> = this.actions$
    .ofType<LoadUser>(UserActionTypes.LoadUser)
    .pipe(
      map(action => action.payload),
      exhaustMap(payload => this.userService.getUser(payload.id)),
      map(user => new LoadUserSuccess({ user })),
      catchError(error => of(new LoadUserFail({ error })))
    );

  @Effect()
  loadUsers: Observable<Action> = this.actions$
    .ofType<LoadUsers>(UserActionTypes.LoadUsers)
    .pipe(
      exhaustMap(() => this.userService.getUsers()),
      map(users => new LoadUsersSuccess({ users })),
      catchError(error => of(new LoadUsersFail({ error })))
    );

  @Effect()
  updateUser: Observable<Action> = this.actions$
    .ofType<UpdateUser>(UserActionTypes.UpdateUser)
    .pipe(
      map(action => action.payload),
      exhaustMap(payload => this.userService.updateUser(payload.user)),
      map(
        user =>
          new UpdateUserSuccess({
            update: {
              id: user.id,
              changes: user
            }
          })
      ),
      catchError(error => of(new UpdateUserFail({ error })))
    );

  constructor(private actions$: Actions, private userService: UserService) {}
}
