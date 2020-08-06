import React from 'react';
import './Button.scss';

const Button = ({ onClick }) => (
  <button className="Button" type="button" onClick={onClick}>
    Load more
  </button>
);

export default Button;
