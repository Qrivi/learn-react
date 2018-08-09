import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <p>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
