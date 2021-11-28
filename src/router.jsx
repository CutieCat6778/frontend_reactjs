
  
import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Invalid } from './pages/invalid';
import { Users } from './pages/users';
import { Main } from './pages/main';

export function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routers */}
        <Route path="/" element={<Main/>} />
        <Route path="users" element={<Users />}>
          <Route path=":userid" element={<Users />}/>
        </Route>
        <Route path="*" element={<Invalid/>}/>
      </Routes>
    </BrowserRouter>
  );
}