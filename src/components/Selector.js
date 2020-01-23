import React, { Component } from 'react';
import BitwiseOperations from './BitwiseOperations';

export default class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedOperations: {
        AND: { name: 'AND', isChecked: 0 },
        OR: { name: 'OR', isChecked: 0 },
        XOR: { name: 'XOR', isChecked: 0 },
        TWOS_COMPLEMENT: { name: "2'S COMPLEMENT", isChecked: 0 },
      },
    };

    this.toggleCheck = (e) => {
      const { selectedOperations } = this.state;
      const targetOp = e.target.name;

      selectedOperations[targetOp].isChecked = !selectedOperations[targetOp].isChecked;

      this.setState({
        selectedOperations,
      });
    };
  }

  render() {
    const { selectedOperations } = this.state;

    return (
      <>
        <div className="row">

          { Object.keys(selectedOperations).map((operation) => (
            <div
              key={`${selectedOperations[operation].name}`}
              className="input-group mb-3 col-sm-3"
            >
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    name={operation}
                    onChange={this.toggleCheck}
                  />
                </div>
              </div>
              <input
                type="text"
                value={selectedOperations[operation].name}
                className="form-control"
                readOnly
              />
            </div>
          )) }
        </div>

        <BitwiseOperations listOfOperations={selectedOperations} />
      </>
    );
  }
}
