import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Uncle Curts SpeakEasy</h1>
        <p><Link to="/newbrew">Get new brew</Link>|<Link to="/employee">Employee</Link></p>
    </div>
  );
}
export default Header;
