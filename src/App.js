import React from 'react';
import Selector from './components/Selector';

export default () => (
  <div className="container">

    <h2 className="heading m-3 mb-4">
      <u>Bitwise operation calculator</u>
      <br />
      <span className="lead">
        Faster, No need to click & wait to get answer.
      </span>
    </h2>

    <Selector />

  </div>
);
