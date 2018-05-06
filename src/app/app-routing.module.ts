import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userRoutes } from './users/routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users'
  },
  {
    path: 'users',
    children: userRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
