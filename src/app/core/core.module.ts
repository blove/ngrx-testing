import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RootDbService } from './db/root.db.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(RootDbService, {
      delay: 500
    })
  ],
  declarations: [],
  providers: [UserService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
