import React from 'react';
import List from './../shared/List';
import IsEmployee from './../shared/IsEmployee';
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

function Employee(){
  return (
    <div>
      <IsEmployee isNowEmployee={true} />
    </div>
  );
}
export default Employee;
