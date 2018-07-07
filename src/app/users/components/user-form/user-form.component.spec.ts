import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User, generateUser } from '@state/user/user.model';
import { UserFormComponent } from './user-form.component';

function newEvent(eventName: string, bubbles = false, cancelable = false) {
  const evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should patch values into the form', () => {
    const user = generateUser();

    component.ngOnChanges({
      user: new SimpleChange(null, user, true)
    });

    expect(component.form.value).toEqual({
      firstName: user.firstName,
      lastName: user.lastName
    });
  });

  it('should emit the userChange event when submitted', () => {
    const user = generateUser();
    const firstName = 'Brian';
    const firstNameDebugEl = fixture.debugElement.query(
      By.css('input[formControlName="firstName"]')
    );
    const firstNameEl = firstNameDebugEl.nativeElement as HTMLInputElement;
    const buttonDebugEl = fixture.debugElement.query(By.css('button'));

    fixture.detectChanges();

    let updatedUser: User;
    component.userChange.subscribe(u => (updatedUser = u));

    component.user = user;
    component.ngOnChanges({
      user: new SimpleChange(null, user, true)
    });

    firstNameEl.value = firstName;
    firstNameEl.dispatchEvent(newEvent('input'));

    buttonDebugEl.triggerEventHandler('click', null);

    expect(updatedUser).toEqual({
      ...user,
      firstName
    });
  });
});
