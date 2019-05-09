import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyles = {
    backgroundColor: '#d2def2',
  };
  var buttonStyles = {
    backgroundColor: '#607699',
    color: 'white',
    padding: '10px',
    fontFamily: 'courier',
    margin: '10px',
    fontSize: '20px',
    border: 'none',
  };
  var rightStyles = {
    padding: '15px',
    float: 'right'
  };
  var searchStyles = {
    fontSize: '20px',

  };
  return (
    <div style={headerStyles}>
      <button style={buttonStyles}><Link to='/'>Home</Link></button>
      <button style={buttonStyles}><Link to='/newfurniture'>Create Furniture</Link></button>
      <button style={buttonStyles}><Link to='/admin'>Admin</Link></button>
      <p>Select Create Furniture to add more items</p>
      <div style={rightStyles}>
        <input style={searchStyles} type='text' placeholder='Search'></input>
      </div>
    </div>

  );
}

export default Header;
