import React from 'react';
import IsEmployee from './IsEmployee';

function EmployeeBrewList(props){
  return(
    <div>
      </hr>
      {fixedBrewRoster.map((list, index) =>
        <List name={list.name}
          brewer={list.brewer}
          description={list.description}
          abv={list.abv}
          price={list.price}
          remaining={list.remaining}
          key={index}/>
      )}
    </div>
  );
}
export default EmployeeBrewList;
