import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { List } from './pages/List/List';
import { User } from './pages/User/User';
import { setupDAL } from './setupDAL';

export const App: React.FC = () => {
  setupDAL();

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
