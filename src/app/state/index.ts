import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from './shared/utils';
import * as fromUser from './user/user.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  user: fromUser.State;
}

export type State = AppState;

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  user: fromUser.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
