import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { generateUser, generateUsers } from './../../state/user/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { get: jest.fn() } },
        UserService
      ]
    });

    http = TestBed.get(HttpClient);
    service = TestBed.get(UserService);

    // Mock implementation of console.error to
    // return undefined to stop printing out to console log during test
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  it('should create an instance successfully', () => {
    expect(service).toBeDefined();
  });

  it('should add a user', () => {
    const user = generateUser();
    const expected = cold('-a|', { a: user });
    http.post = jest.fn(() => expected);

    expect(service.addUser(user)).toBeObservable(expected);
    expect(http.post).toHaveBeenCalledWith(UserService.BASE_URL, user);
  });

  it('should retreive a user', () => {
    const user = generateUser();
    const expected = cold('-a|', { a: user });
    http.get = jest.fn(() => expected);

    expect(service.getUser(user.id)).toBeObservable(expected);
    expect(http.get).toHaveBeenCalledWith(`${UserService.BASE_URL}/${user.id}`);
  });

  it('should retrieve all users', () => {
    const expected = cold('-b|', { b: generateUsers() });
    http.get = jest.fn(() => expected);

    expect(service.getUsers()).toBeObservable(expected);
    expect(http.get).toHaveBeenCalled();
  });

  it('should update a user', () => {
    const user = generateUser();
    const expected = cold('-a|', { a: user });
    http.put = jest.fn(() => expected);

    expect(service.updateUser(user)).toBeObservable(expected);
    expect(http.put).toHaveBeenCalledWith(
      `${UserService.BASE_URL}/${user.id}`,
      user
    );
  });
});
