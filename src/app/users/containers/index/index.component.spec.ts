import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { LoadUsers, LoadUsersSuccess } from '@state/user/user.actions';
import { generateUsers } from '@state/user/user.model';
import { cold } from 'jasmine-marbles';
import { UserListComponent } from './../../components/user-list/user-list.component';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, UserListComponent],
      imports: [RouterTestingModule, StoreModule.forRoot(fromRoot.reducers)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch an the LoadUsers action in ngOnInit lifecycle', () => {
    const action = new LoadUsers();
    const spy = jest.spyOn(store, 'dispatch');

    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('shoud selectAllUsers', () => {
    const action = new LoadUsers();
    store.dispatch(action);
    component.users.subscribe(users => expect(users.length).toBeGreaterThan(0));
  });

  fit('should be an observable of an array of user objects', () => {
    const users = generateUsers();
    const expected = cold('a', { a: users });
    const action = new LoadUsersSuccess({ users: users });
    store.dispatch(action);
    expect(component.users).toBeObservable(expected);
  });
});
