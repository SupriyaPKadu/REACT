// src/App.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/xyz">User Alice</Link>
          </li>
          <li>
            <Link to="/user/pqr">User Bob</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
