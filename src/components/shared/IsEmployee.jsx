import React from 'react';
import EmployeeBrewList from 'EmployeeBrewList';
import GuestBrewList from 'GuestBrewList';

function IsEmployee(props){
  const isEmployee = props.isEmployee;
  if (isEmployee){
    return <EmployeeBrewList.jsx />;
  }
  return <GuestBrewList.jsx />;
}

export default IsEmployee;
