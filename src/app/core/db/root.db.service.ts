import { generateUsers } from '@state/user/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class RootDbService implements InMemoryDbService {
  createDb() {
    return { users: generateUsers(10) };
  }
}
