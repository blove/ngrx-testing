import * as faker from 'faker/locale/en_US';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const generateUser = (): User => {
  return {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  };
};

export const generateUsers = (
  count = faker.random.number({ min: 1, max: 20 })
): User[] => {
  return Array.apply(null, Array(count)).map(() => generateUser());
};
