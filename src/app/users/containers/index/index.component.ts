import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '@state/index';
import { selectAllUsers } from '@state/user';
import { LoadUsers } from '@state/user/user.actions';
import { User } from '@state/user/user.model';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users: Observable<Array<User>>;

  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users = this.store.pipe(select(selectAllUsers));
  }

  onSelectUser(user: User) {
    this.router.navigate(['/users', user.id]);
  }
}
