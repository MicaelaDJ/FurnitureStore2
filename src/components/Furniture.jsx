import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Furniture(props){
  var furnitureStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'courier',
    paddingTop: '50px',
    textAlign: 'center'
  };
  const furnitureInformation =
    <div style={furnitureStyles}>
      <h3>{props.names}</h3>
      <p>{props.images}</p>
      <p><em>The colors available are: {props.colors}</em></p>
      <p>{props.deliverable}</p>
      <p>{props.availability}</p>
      <h4>This furniture piece was added {props.formattedWaitTime} ago</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onFurnitureSelection(props.furnitureId);}}>
        {furnitureInformation}
      </div>
    );
  }  else {
    return (
      <div>
        {furnitureInformation}
      </div>
    );
  }
  // return (
  //   <div style={furnitureStyles}>
  //     <h3>{props.names}</h3>
  //     <p>{props.images}</p>
  //     <p>{props.description}</p>
  //     <p><em>The colors available are: {props.colors}</em></p>
  //     <p>{props.deliverable}</p>
  //     <p>{props.availability}</p>
  //     <h4>This furniture piece was added {props.formattedWaitTime} ago</h4>
  //     <hr/>
  //   </div>
  // );
}

// function displayTimeOpen(timeOpen) {
//   return timeOpen.from(new Moment(), true);
// }

Furniture.propTypes = {
  names: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  colors:PropTypes.string,
  images:PropTypes.object,
  deliverable:PropTypes.string,
  availability:PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onFurnitureSelection: PropTypes.func,
  furnitureId: PropTypes.string.isRequired
};

export default Furniture;
