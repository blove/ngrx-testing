import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@state/user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static BASE_URL = 'api/users';

  constructor(private httpClient: HttpClient) {}

  addUser(user: Partial<User>): Observable<User> {
    return this.httpClient.post<User>(UserService.BASE_URL, user);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${UserService.BASE_URL}/${id}`);
  }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(UserService.BASE_URL);
  }

  updateUser(user: Partial<User>): Observable<User> {
    return this.httpClient.put<User>(
      `${UserService.BASE_URL}/${user.id}`,
      user
    );
  }
}
