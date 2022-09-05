import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { User } from '../pages/User/User';
import { BrowserRouter } from 'react-router-dom';

interface getAxiosRequest {
  data: getData;
}

interface getData {
  data: Item;
}

interface Item {
  firstName: string;
  lastName: string;
  age: number;
}

const users = [{ id: 1 }];
const getMock = (url: string) =>
  url.includes('get/id')
    ? Promise.resolve({ data: { data: users } })
    : Promise.resolve<getAxiosRequest>({
        data: { data: { firstName: 'firstName', age: 10, lastName: 'lastName' } },
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
        expect(getByText(10)).toBeVisible();
      },
      {
        timeout: 500,
      },
    );
  });
});
