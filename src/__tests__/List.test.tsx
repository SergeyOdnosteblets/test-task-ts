import '@testing-library/jest-dom';

import axios from 'axios';
import {getUsers } from '../utils/axios';

jest.mock('axios');

describe('getUsers', () => {
  it('should return users list', async () => {
    const users = [{ id: 1 }, { id: 2 }];
    axios.get.mockResolvedValueOnce(users);

    const result = await getUsers(users);

    expect(axios.get).toHaveBeenCalledWith('/list');
    expect(result).toEqual(users);
  });

  it('should return empty users list', async () => {
    const users = [];
    axios.get.mockResolvedValueOnce(users);

    const result = await getUsers();

    expect(axios.get).toHaveBeenCalledWith('/list');
    expect(result).toEqual(users);
  });
});

describe('when API call fails', () => {
  it('should return empty users list', async () => {
    const message = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(message));

    const result = await getUsers();

    expect(axios.get).toHaveBeenCalledWith('/list');
    expect(result).toEqual([]);
  });
});
