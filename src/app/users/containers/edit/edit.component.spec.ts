import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '@core/services/user.service';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { LoadUser, SelectUser } from '@state/user/user.actions';
import { User, generateUser } from '@state/user/user.model';
import { hot } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { EditComponent } from './edit.component';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
// class ActivatedRouteStub {
//   // Use a ReplaySubject to share previous values with subscribers
//   // and pump new values into the `paramMap` observable
//   private subject = new ReplaySubject<ParamMap>();

//   constructor(initialParams?: Params) {
//     this.setParamMap(initialParams);
//   }

//   /** The mock paramMap observable */
//   readonly paramMap = this.subject.asObservable();

//   /** Set the paramMap observables's next value */
//   setParamMap(params?: Params) {
//     this.subject.next(convertToParamMap(params));
//   }
// }

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let store: Store<fromRoot.State>;
  let user: User;
  let userService: UserService;

  beforeEach(() => {
    user = generateUser();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent, UserFormComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromRoot.reducers)
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: new BehaviorSubject(
              convertToParamMap({
                id: user.id
              })
            )
          }
        },
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn(() => hot('-a', { a: user }))
          }
        },
        {
          provide: UserService,
          useValue: {
            getUser: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch SelectUser action for specified id parameter', () => {
    const action = new SelectUser({ id: user.id });
    const spy = jest.spyOn(store, 'dispatch');

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch LoadUser action for specified id parameter', () => {
    const action = new LoadUser({ id: user.id });
    const spy = jest.spyOn(store, 'dispatch');

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should select the currently selected user', () => {
    component.user$.subscribe(selectedUser => expect(selectedUser).toBe(user));
  });
});
