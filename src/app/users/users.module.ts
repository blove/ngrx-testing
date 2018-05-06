import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StateModule } from '@state/state.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { IndexComponent } from './containers/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StateModule
  ],
  declarations: [
    IndexComponent,
    UserListComponent,
    AddComponent,
    UserFormComponent,
    EditComponent
  ]
})
export class UsersModule {}
