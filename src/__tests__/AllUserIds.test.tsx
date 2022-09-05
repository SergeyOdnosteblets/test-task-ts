import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { AllUserIds } from '../components/AllUserIds';
import { BrowserRouter } from 'react-router-dom';

const users = [{ id: 1 }];
const getMock = (url: string) =>
  url.includes('list')
    ? Promise.resolve({ data: { data: users } })
    : Promise.resolve({ data: { data: { firstName: 'firstName' } } });
jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: getMock,
}));

it('render AllUsersId with received data', async () => {
  const { getByText } = render(
    <BrowserRouter>
      <AllUserIds />
    </BrowserRouter>,
  );

  await waitFor(() => expect(getByText('firstName')).toBeVisible(), {
    timeout: 500,
  });
});
