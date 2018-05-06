import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StateModule } from '@state/state.module';

describe(`StateModule`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StateModule.forRoot()]
    });
  });

  it(`should provide 'Store' service`, () => {
    expect(() => TestBed.get(Store)).toBeTruthy();
  });
});
