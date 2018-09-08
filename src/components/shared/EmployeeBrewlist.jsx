import React from 'react';
import List from './List';
let fixedBrewRoster = [
  {
    name: 'Grandpa Kurtis Ginger Kambucha',
    brewer: 'Granpappy Kurt',
    description: 'Probiotic and Prebiotic accessories',
    abv: '12%',
    price: '14',
    remaining: '34'
  },
  {
    name: 'Grandpa Kurtis Lemon and Chili Kambucha',
    brewer: 'Granpappy Kurt',
    description: 'Probiotic and Prebiotic accessories',
    abv: '20%',
    price: '15',
    remaining: '20'
  }
];
function EmployeeBrewList(props){
  return(
    <div>
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
