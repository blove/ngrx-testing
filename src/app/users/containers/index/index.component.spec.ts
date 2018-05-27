import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { LoadUsers } from '@state/user/user.actions';
import { generateUsers } from '@state/user/user.model';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { last } from 'rxjs/operators';
import { UserListComponent } from './../../components/user-list/user-list.component';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, UserListComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  describe('ngOnInit()', () => {
    it('should dispatch an the LoadUsers action in ngOnInit lifecycle', () => {
      const action = new LoadUsers();
      const store = TestBed.get(Store);
      const spy = jest.spyOn(store, 'dispatch');

      fixture.detectChanges();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should selectAllUsers', () => {
      const store = TestBed.get(Store);
      const users = generateUsers();
      store.pipe = jest.fn(() => hot('-a', { a: users }));

      fixture.detectChanges();

      const expected = cold('-a', { a: users });
      expect(component.users).toBeObservable(expected);
    });
  });

  describe('users', () => {
    it('should be an observable of an array of user objects', done => {
      const users = generateUsers();
      const store = TestBed.get(Store);
      store.pipe = jest.fn(() => cold('-a|', { a: users }));

      fixture.detectChanges();

      component.users.pipe(last()).subscribe(componentUsers => {
        expect(componentUsers).toEqual(users);
        done();
      });

      getTestScheduler().flush();
    });
  });
});
