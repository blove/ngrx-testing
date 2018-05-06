import { Routes } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { IndexComponent } from './containers/index/index.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: ':id',
    component: EditComponent
  }
];
