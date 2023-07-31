import React from 'react';

function Counter({ title, ...object }) {

  return (
    <h1>{title} {object.count}</h1>
  );
}

export default Counter;
