import React from 'react';
import PropTypes from 'prop-types';

function NewFurnitureForm(props){
  let _names = null;
  let _colors = null;
  let _description = null;

  function handleNewFurnitureFormSubmission(event) {
    event.preventDefault();
    props.onNewFurnitureCreation({names: _names.value, colors: _colors.value, description: _description.value});
    _names.value = '';
    _colors.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFurnitureFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Furniture Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='colors'
          placeholder='Colors'
          ref={(input) => {_colors = input;}} />
        <textarea
          id='description'
          placeholder='Describe your future furniture.'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewFurnitureForm.propTypes = {
  onNewFurnitureCreation: PropTypes.func
};

export default NewFurnitureForm;