import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>The section {props.location.pathname} does not exist!</h2>
      <h3>Return home <Link to="/">here</Link>. If you believe there has been a mistake</h3>
      <h3>contact the developer @******</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};
export default Error404;
