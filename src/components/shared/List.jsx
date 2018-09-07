import React from 'react';
import PropTypes from 'prop-types';


function List(props){
  return(
    <div>
      <h3>{props.name}, produced by: {props.brewer}</h3>
      <p className="description-text">{props.description}</p>
      <table>
        <tr>
          <th>ABV</th>
          <th>Price</th>
          <th>Remaining</th>
        </tr>
        <tr>
          <td>{props.abv}</td>
          <td>{props.price}</td>
          <td>{props.remaining}</td>
        </tr>
      </table>
    </div>
  );
}
List.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string
}

export default List;
