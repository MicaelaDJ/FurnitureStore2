import React from 'react';

function NewFurnitureForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Furniture Name'/>
        <input
          type='text'
          id='colors'
          placeholder='Colors'/>
        <textarea
          id='description'
          placeholder='Describe your future furniture.'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewFurnitureForm;