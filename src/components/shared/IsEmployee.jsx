import React from 'react';
import EmployeeBrewList from './EmployeeBrewList';
import GuestBrewList from './GuestBrewList';

function IsEmployee(props){
  console.log(props);
  const isNowEmployee = props.isNowEmployee;
  if (isNowEmployee){
    return <EmployeeBrewList />;
  }
  return <GuestBrewList />;
}

export default IsEmployee;
