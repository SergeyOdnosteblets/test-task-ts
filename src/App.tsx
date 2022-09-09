import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { List } from './pages/List/List';
import { User } from './pages/User/User';
import { setupDAL } from './setupDAL';

export const App: React.FC = () => {
  const [list, setList] = useState([]);

  setupDAL();

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<List list={list} setList={setList} />} />
          <Route path="/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
