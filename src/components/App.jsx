import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Error404 from './shared/Error404';
//import Home from './home/Home';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
      </Switch>
      <Footer/>
    </div>
  )
}
