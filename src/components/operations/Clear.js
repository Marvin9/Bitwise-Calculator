import React from 'react';
import PropTypes from 'prop-types';

const Clear = ({ setState }) => (
  <button
    type="button"
    className="btn btn-danger"
    onClick={() => {
      setState();
    }}
  >
    Clear
  </button>
);

Clear.propTypes = {
  setState: PropTypes.func.isRequired,
};

export default Clear;
