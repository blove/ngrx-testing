import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { UserService } from './services/user.service';

describe(`CoreModule.forRoot()`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()]
    });
  });

  it(`should not provide 'UserService' service`, () => {
    expect(() => TestBed.get(UserService)).toBeTruthy();
  });
});
