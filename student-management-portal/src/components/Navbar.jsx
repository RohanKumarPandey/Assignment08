import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/students">Student List</Link>
      <Link to="/register">Register Student</Link>
    </nav>
  );
};

export default Navbar;
