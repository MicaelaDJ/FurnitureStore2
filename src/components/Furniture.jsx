import React from 'react';
import PropTypes from 'prop-types';

function Furniture(props){
  var furnitureStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'courier',
    paddingTop: '50px',
    textAlign: 'center'
  };
  return (
    <div style={furnitureStyles}>
      <h3>{props.names}</h3>
      <p>{props.images}</p>
      <p>{props.description}</p>
      <p><em>{props.colors}</em></p>
      <p>{props.deliverable}</p>
      <p>{props.availability}</p>
      <hr/>
    </div>
  );
}

Furniture.propTypes = {
  names: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  colors:PropTypes.string,
  images:PropTypes.object,
  deliverable:PropTypes.string,
  availability:PropTypes.string
};

export default Furniture;
