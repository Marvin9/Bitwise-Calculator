import React from 'react';
import PropTypes from 'prop-types';
import Common from './operations/commonDesign/CommonAndOrXor';
import TwosComp from './operations/TwosComplement';

const OPERATIONS = [
  <Common heading="AND" operationName="AND" />,
  <Common heading="OR" operationName="OR" />,
  <Common heading="XOR" operationName="XOR" />,
  <TwosComp />,
];

const Operation = ({ listOfOperations }) => (
  <div className="row">
    { Object.keys(listOfOperations).map((operation, key) => (
      listOfOperations[operation].isChecked
        ? (
          <div className="m-4" key={`${operation}`}>
            { OPERATIONS[key] }
          </div>
        )
        : null
    ))}
  </div>
);

Operation.propTypes = {
  listOfOperations: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Operation;
