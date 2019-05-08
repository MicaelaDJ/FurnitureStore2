import React from 'react';
import Header from './Header';
import FurnitureList from './FurnitureList';
import NewFurnitureControl from './NewFurnitureControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFurnitureList: []
    };
    this.handleAddingNewFurnitureToList = this.handleAddingNewFurnitureToList.bind(this);
  }

  handleAddingNewFurnitureToList(newFurniture){
    var newMasterFurnitureList = this.state.masterFurnitureList.slice();
    newMasterFurnitureList.push(newFurniture);
    this.setState({masterFurnitureList: newMasterFurnitureList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><FurnitureList furnitureList={this.state.masterFurnitureList} />} />
          <Route path='/newfurniture' render={() => <NewFurnitureControl onNewFurnitureCreation={this.handleAddingNewFurnitureToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
