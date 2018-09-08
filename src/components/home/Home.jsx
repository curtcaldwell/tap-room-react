import React from 'react';
import List from './../shared/List';
import IsEmployee from './../shared/IsEmployee';

function Home(){
  return (

    <div>
      
      <IsEmployee isNowEmployee={false} />
    </div>
  );
}


export default Home;
