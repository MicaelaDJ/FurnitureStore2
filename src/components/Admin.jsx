import React from 'react';
import PropTypes from 'prop-types';
import FurnitureList from './FurnitureList';
import FurnitureDetail from './FurnitureDetail';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <FurnitureDetail />
      <FurnitureList
        furnitureList={props.furnitureList}
        currentRouterPath={props.currentRouterPath}
        onFurnitureSelection={props.onFurnitureSelection} />
    </div>
  );
}

Admin.propTypes = {
  furnitureList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onFurnitureSelection: PropTypes.func.isRequired
};

export default Admin;