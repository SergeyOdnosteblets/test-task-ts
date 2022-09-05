import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { User } from '../pages/User/User';
import { BrowserRouter } from 'react-router-dom';

const users = [{ id: 1 }];
const getMock = (url) =>
  url.includes('get/id')
    ? Promise.resolve({ data: { data: users } })
    : Promise.resolve({
        data: { data: { firstName: 'firstName', age: 'age', lastName: 'lastName' } },
      });
jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: getMock,
}));

describe('User', () => {
  it('render User with received data', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <User />
      </BrowserRouter>,
    );

    await waitFor(
      () => {
        expect(getByText('firstName')).toBeVisible();
        expect(getByText('lastName')).toBeVisible();
        expect(getByText('age')).toBeVisible();
      },
      {
        timeout: 500,
      },
    );
  });
});
