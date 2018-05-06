import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User, generateUsers } from '@state/user/user.model';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let users = generateUsers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an unordered list of heroes', () => {
    const ulDebugEl = fixture.debugElement.query(By.css('ul'));
    const ulEl = ulDebugEl.nativeElement as HTMLUListElement;
    component.users = users;
    fixture.detectChanges();
    expect(ulEl.childElementCount).toBe(users.length);
  });

  it('should select a user when clicked', () => {
    const users = generateUsers();
    const user = users[0];

    component.users = users;
    fixture.detectChanges();
    const anchorDebugEl = fixture.debugElement.query(
      By.css('ul > li:first-child > a')
    );

    let selectedUser: User;
    component.selectUser.subscribe(user => (selectedUser = user));

    anchorDebugEl.triggerEventHandler('click', user);
    expect(selectedUser).toEqual(user);
  });
});
