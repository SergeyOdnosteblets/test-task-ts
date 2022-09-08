import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { List } from './pages/List/List';
import { User } from './pages/User/User';
import { setupDAL } from './setupDAL';

export const App: React.FC = () => {
  const [delUser, setDelUser] = useState<string[]>([]);

  setupDAL();

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<List delUser={delUser} setDelUser={setDelUser} />} />
          <Route path="/:id" element={<User delUser={delUser} setDelUser={setDelUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
