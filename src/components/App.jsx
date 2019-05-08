import React from 'react';
import Header from './Header';
import FurnitureList from './FurnitureList';
import NewFurnitureControl from './NewFurnitureControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
// import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFurnitureList: {},
      selectedFurniture: null
    };
    this.handleAddingNewFurnitureToList = this.handleAddingNewFurnitureToList.bind(this);
    this.handleChangingSelectedFurniture = this.handleChangingSelectedFurniture.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateFurnitureElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateFurnitureElapsedWaitTime() {
    var newMasterFurnitureList = Object.assign({}, this.state.masterFurnitureList);
    Object.keys(newMasterFurnitureList).forEach(furnitureId => {
      newMasterFurnitureList[furnitureId].formattedWaitTime = (newMasterFurnitureList[furnitureId].timeOpen).fromNow(true)
    });
    this.setState({masterFurnitureList: newMasterFurnitureList});
  }

  handleAddingNewFurnitureToList(newFurniture){
    var newMasterFurnitureList = Object.assign({}, this.state.masterFurnitureList, {
      [newFurniture.id]: newFurniture
    });
    newMasterFurnitureList[newFurniture.id].formattedWaitTime = newMasterFurnitureList[newFurniture.id].timeOpen.fromNow(true);
    this.setState({masterFurnitureList: newMasterFurnitureList});
  }

  handleChangingSelectedFurniture(furnitureId){
    this.setState({selectedFurniture: furnitureId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><FurnitureList furnitureList={this.state.masterFurnitureList} />} />
          <Route path='/newfurniture' render={()=><NewFurnitureControl onNewFurnitureCreation={this.handleAddingNewFurnitureToList} />} />
          <Route path='/admin' render={(props)=><Admin furnitureList={this.state.masterFurnitureList} currentRouterPath={props.location.pathname}
            onFurnitureSelection={this.handleChangingSelectedFurniture}
            selectedFurniture={this.state.selectedFurniture} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
