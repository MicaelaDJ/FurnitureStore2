import React from 'react';
import PropTypes from 'prop-types';

function FurnitureDetail(props) {
  return (
    <div>
      <hr/>
      <h1>{props.selectedFurniture.names}</h1>
      <h2><em>{props.selectedFurniture.colors}</em></h2>
      <h2>{props.selectedFurniture.description}</h2>
      <h4>This furniture piece was added {props.selectedFurniture.formattedWaitTime} ago</h4>
    </div>
  );
}

FurnitureDetail.propTypes = {
  selectedFurniture: PropTypes.object
};

export default FurnitureDetail;