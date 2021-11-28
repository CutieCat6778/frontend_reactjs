
  
import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import { Invalid } from './pages/invalid';
import { Users } from './pages/users';

export function AppRouter () {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Routes>
          {/* Other routers */}
          <Route path="/" element={<App/>} />
          <Route path="users" element={<Users />}>
            <Route path=":userid" element={<Users />}/>
          </Route>
          <Route path="*" element={<Invalid/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}