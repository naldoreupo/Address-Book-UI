import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Address book App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          contact List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;