import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1><Link className="HeaderLink">Uncle Curts SpeakEasy</Link></h1>
      <Link to="/newbrew">Add new brew</Link> | <Link to="employee">Edit current brew</Link>
    </div>
  );
}
export default Header;
