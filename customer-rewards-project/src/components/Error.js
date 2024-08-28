// src/components/Error.js
import React from 'react';
import '../styles/Error.css';


const Error = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default Error;
