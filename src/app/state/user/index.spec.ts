import { generateUsers } from '@state/user/user.model';
import * as fromSelectors from './index';

describe('User selectors', () => {
  it('should get the retrieve the selected user', () => {
    const users = generateUsers(2);
    const entities = {
      [users[0].id]: users[0],
      [users[1].id]: users[1]
    };
    const selectedUser = users[0];

    expect(
      fromSelectors.selectSelectedUser.projector(entities, selectedUser.id)
    ).toBe(selectedUser);
  });
});
