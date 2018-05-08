import { generateUsers } from '@state/user/user.model';
import { selectSelectedUser } from './index';

describe('User selectors', () => {
  const users = generateUsers(2);
  const entities = {
    [users[0].id]: users[0],
    [users[1].id]: users[1]
  };
  const selectedUser = users[0];

  it('should return null when entities is falsy', () => {
    expect(selectSelectedUser.projector(null, selectedUser.id)).toBe(null);
  });

  it('should get the retrieve the selected user', () => {
    expect(selectSelectedUser.projector(entities, selectedUser.id)).toBe(
      selectedUser
    );
  });
});
