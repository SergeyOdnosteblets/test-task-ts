import axios from 'axios';

export const getUsers = async () => {
  try {
    return await axios.get('/list');
  } catch (e) {
    return [];
  }
};