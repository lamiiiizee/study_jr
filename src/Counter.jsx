import React from 'react';

function Counter(props) {

  const { title, count } = props;

  return (
    <h1>{title} {count}</h1>
  );
}

export default Counter;
