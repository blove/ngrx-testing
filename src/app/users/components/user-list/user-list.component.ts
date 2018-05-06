import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@state/user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Output() selectUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}
}
