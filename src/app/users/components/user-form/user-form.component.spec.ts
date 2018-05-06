import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User, generateUser } from '@state/user/user.model';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should emit the userChange event when submitted', () => {
    const user = generateUser();
    const buttonDebugEl = fixture.debugElement.query(By.css('button'));
    const buttonEl = buttonDebugEl.nativeElement as HTMLButtonElement;

    let addUser: User;
    component.userChange.subscribe(user => (addUser = user));

    component.user = user;
    component.ngOnChanges({
      user: new SimpleChange(null, user, true)
    });
    buttonDebugEl.triggerEventHandler('click', null);

    expect(addUser).toEqual(user);
  });
});
