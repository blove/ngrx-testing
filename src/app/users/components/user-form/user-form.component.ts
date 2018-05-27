import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@state/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  form: FormGroup;

  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.user && simpleChanges.user.currentValue) {
      this.form.patchValue(simpleChanges.user.currentValue);
    }
  }

  onSave() {
    // verify form is valid
    if (this.form.invalid) {
      return;
    }

    this.userChange.emit({
      ...this.user,
      ...this.form.value
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
}
