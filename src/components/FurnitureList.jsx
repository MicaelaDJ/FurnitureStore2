import React from 'react';
import Furniture from './Furniture';
import PropTypes from 'prop-types';
// import blueChair from '../assets/images/bluechair.jpg'; 
// import table from '../assets/images/table.jpg'; 
// import chaise from '../assets/images/chaise.jpeg'; 


// var masterFurnitureList = [
//   {
//     images: <img src={blueChair}/>,
//     names: 'Plushy Chair',
//     description: 'If you dislike moving while sitting then this chair is for you. Stays right where you put it.',
//     colors: 'The available colors for this item are: white, black, green, and blue.',
//     deliverable: 'This item can be delivered!',
//     availability: 'There are 12 available'
//   },
//   {
//     images: <img src={table}/>,
//     names: 'Square Table',
//     description: 'For those who live on the edge. This tables makes a point in any room.',
//     colors: 'The available colors for this item are: white and black.',
//     deliverable: 'This item can be delivered!',
//     availability: 'There are 4 available'
//   },
//   {
//     images: <img src={chaise}/>,
//     names: 'Plushy Chaise',
//     description: 'This chair thing is sooooo loooong.',
//     colors: 'The available colors for this item are: white, black, and light blue.',
//     deliverable: 'This item can be delivered!',
//     availability: 'There is 1 available'
//   }
// ];


function FurnitureList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.furnitureList).map(function(furnitureId) {
        var furniture = props.furnitureList[furnitureId];
        return <Furniture 
          images={furniture.images}
          names={furniture.names}
          description={furniture.description}
          colors={furniture.colors}
          deliverable={furniture.deliverable}
          availability={furniture.availability}
          formattedWaitTime={furniture.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={furnitureId}
          furnitureId={furnitureId}
          onFurnitureSelection={props.onFurnitureSelection} />;
      })}
    </div>
  );
}

FurnitureList.propTypes = {
  furnitureList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onFurnitureSelection: PropTypes.func
};

export default FurnitureList;
