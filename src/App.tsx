import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListContainer } from './pages/ListContainer/ListContainer';
import { User } from './pages/User/User';
import { setupDAL } from './setupDAL';
import { UserInfo } from './types/UserInfo';

export const App: React.FC = () => {
  const [list, setList] = useState([
    {
      id: 'b69ce51a-a0b2-4ab2-8d58-be6c74f301da',
      firstName: 'Chris',
      lastName: 'Smith',
      age: 19,
      gender: 'Female',
      country: 'India',
    },
    {
      id: '834ac614-2ece-4f2d-a0d3-1af912a04bfd',
      firstName: 'John',
      lastName: 'Smith',
      age: 12,
      gender: 'Male',
      country: 'Canada',
    },
    {
      id: '14a8ccca-c587-45f7-880f-99e813a80d26',
      firstName: 'Bob',
      lastName: 'Smith',
      age: 25,
      gender: 'Male',
      country: 'Australia',
    },
    {
      id: 'dba262d6-cc61-420b-89de-818c4fdb787c',
      firstName: 'Rick',
      lastName: 'Smith',
      age: 64,
      gender: 'Male',
      country: 'United States',
    },
    {
      id: 'b22bdd96-17d1-42e7-9ba8-0b3d175cdc56',
      firstName: 'Joseph',
      lastName: 'Smith',
      age: 11,
      gender: 'Female',
      country: 'Canada',
    },
    {
      id: '94b625c4-bdb8-4c6a-82ef-e2f15882e47d',
      firstName: 'Philip',
      lastName: 'Smith',
      age: 12,
      gender: 'Male',
      country: 'Canada',
    },
    {
      id: '2911f253-ac9a-475e-8be8-f8dbedc9d3c9',
      firstName: 'Ben',
      lastName: 'Smith',
      age: 76,
      gender: 'Female',
      country: 'Spain',
    },
    {
      id: '25df7c90-978f-4b3f-ac51-4e15fdd5cf0e',
      firstName: 'Larry',
      lastName: 'Smith',
      age: 23,
      gender: 'Female',
      country: 'India',
    },
    {
      id: '9f1f1eff-c9bf-48c9-b5c6-af4461c62235',
      firstName: 'Peter',
      lastName: 'Smith',
      age: 61,
      gender: 'Male',
      country: 'Canada',
    },
    {
      id: '636cb4c0-7390-41e2-8eee-50ae612987c5',
      firstName: 'Rob',
      lastName: 'Smith',
      age: 34,
      gender: 'Male',
      country: 'United States',
    },
  ]);
  const [filteredUsers, setFilteredUsers] = useState<UserInfo[]>(list);
  setupDAL();

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route
            path="/"
            element={
              <ListContainer
                list={list}
                setFilteredUsers={setFilteredUsers}
                filteredUsers={filteredUsers}
              />
            }
          />
          <Route path="/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
