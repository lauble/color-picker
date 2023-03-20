import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Collection() {
  return (
    <div>
      <div id="nav">
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
      </div>
    </div>
  );
}
