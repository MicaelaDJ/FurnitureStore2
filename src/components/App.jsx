import React from 'react';
import Header from './Header';
import FurnitureList from './FurnitureList';
import { Switch, Route } from 'react-router-dom';
import NewFurnitureForm from './NewFurnitureForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={FurnitureList} />
        <Route path='/newfurniture' component={NewFurnitureForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
