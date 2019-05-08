import React from 'react';
import PropTypes from 'prop-types';
import FurnitureList from './FurnitureList';
import FurnitureDetail from './FurnitureDetail';

function Admin(props){
  let optionalSelectedFurnitureContent = null;
  if (props.selectedFurniture != null){
    optionalSelectedFurnitureContent = <FurnitureDetail selectedFurniture={props.furnitureList[props.selectedFurniture]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedFurnitureContent}
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
  onFurnitureSelection: PropTypes.func.isRequired,
  selectedFurniture: PropTypes.string,
};

export default Admin;