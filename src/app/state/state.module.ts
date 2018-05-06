import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../environments/environment';
import { metaReducers, reducers } from './index';
import { UserEffects } from './user/user.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Testing Store DevTools',
      logOnly: environment.production
    })
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: StateModule
  ) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
