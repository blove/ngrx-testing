import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { selectSelectedUser } from '@state/user';
import { LoadUser, SelectUser } from '@state/user/user.actions';
import { User } from '@state/user/user.model';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    const PARAM_ID = 'id';
    this.user$ = this.activatedRoute.paramMap.pipe(
      // tap(paramMap => {
      //   const exists = paramMap.has(PARAM_ID);
      //   const value = paramMap.get(PARAM_ID);
      //   console.log(value);
      // }),
      filter(paramMap => paramMap.has(PARAM_ID)),
      map(paramMap => paramMap.get(PARAM_ID)),
      tap(id => {
        this.store.dispatch(new SelectUser({ id: +id }));
        this.store.dispatch(new LoadUser({ id: +id }));
      }),
      switchMap(id => this.store.pipe(select(selectSelectedUser)))
    );
  }
}
