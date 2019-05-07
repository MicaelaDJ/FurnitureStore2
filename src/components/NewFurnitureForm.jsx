import React from 'react';
import PropTypes from 'prop-types'

function NewFurnitureForm(props){
  let _names = null;
  let _colors = null;
  let _description = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(_names.value);
    console.log(_colors.value);
    console.log(_description.value);
    props.onNewFurnitureCreation({names: _names.value, colors: _colors.value, description: _description.value});
    _names.value = '';
    _colors.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
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