import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Error404 from './shared/Error404';
import Home from './home/Home';
import Employee from './employee/Employee';
import Newbrew from './newbrew/Newbrew';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/employee' component={Employee} />
        <Route exact path='/newbrew' component={Newbrew} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
