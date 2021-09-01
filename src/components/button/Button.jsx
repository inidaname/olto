import React from 'react';
import './button.css';

const Button = ({value, clickEvent, action}) => {
  return (
    <button className="btn-value" onClick={(event) => clickEvent(event, action)}>{value}</button>
  )
}

export default Button
