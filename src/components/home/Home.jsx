import React from 'react';
import List from './../shared/List';
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

function Home(){
  return (

    <div>
      <hr/>
      {fixedBrewRoster.map((list, index) =>
        <List name={list.name}
          brewer={list.brewer}
          description={list.description}
          abv={list.abv}
          price={list.price}
          key={index}/>
      )}
    </div>
  );
}


export default Home;
