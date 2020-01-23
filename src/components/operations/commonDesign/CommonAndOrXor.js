import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { binaryToDecimal, decimalToBinary } from '../../utils/conversion';

export default class Common extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: {
        binary: '0',
        decimal: 0,
      },
      value2: {
        binary: '0',
        decimal: 0,
      },
      answer: {
        binary: 0,
        decimal: 0,
      },
    };

    // todo change names
    this.onValueEntered = (anywhereInsideAND) => {
      let getMeaningfulInformationAboutThatInput = anywhereInsideAND.target.attributes['data-id'].value;
      getMeaningfulInformationAboutThatInput = getMeaningfulInformationAboutThatInput.split('-');

      const whichNumberOfInputItIs = getMeaningfulInformationAboutThatInput[0];

      // d - is decimal & b - is binary
      const letInputIsBinaryOrDecimal = getMeaningfulInformationAboutThatInput[1];

      const valueEntered = anywhereInsideAND.target.value === '' ? 0 : anywhereInsideAND.target.value;

      switch (whichNumberOfInputItIs) {
        case '1':
          switch (letInputIsBinaryOrDecimal) {
            case 'd':
              this.setState({
                value1: {
                  decimal: +valueEntered,
                  binary: decimalToBinary(+valueEntered),
                },
              }, this.performTemplate);

              break;

            case 'b':
              this.setState({
                value1: {
                  decimal: binaryToDecimal(valueEntered),
                  binary: valueEntered,
                },
              }, this.performTemplate);

              break;

            default:
              break;
          }

          break;

        case '2':
          switch (letInputIsBinaryOrDecimal) {
            case 'd':
              this.setState({
                value2: {
                  decimal: +valueEntered,
                  binary: decimalToBinary(+valueEntered),
                },
              }, this.performTemplate);

              break;

            case 'b':
              this.setState({
                value2: {
                  decimal: binaryToDecimal(valueEntered),
                  binary: valueEntered,
                },
              }, this.performTemplate);

              break;

            default:
              break;
          }

          break;

        default:
          break;
      }
    };


    this.performTemplate = () => {
      const { value1, value2 } = this.state;
      const { operationName } = this.props;

      switch (operationName) {
        case 'AND': {
          const AND = (+value1.decimal) & (+value2.decimal);
          this.setStateSimplified(AND);
          break;
        }

        case 'OR': {
          const OR = (+value1.decimal) | (+value2.decimal);
          this.setStateSimplified(OR);
          break;
        }

        case 'XOR': {
          const XOR = (+value1.decimal) ^ (+value2.decimal);
          this.setStateSimplified(XOR);
          break;
        }

        default:
          break;
      }
    };

    this.setStateSimplified = (answer, fn = () => { }) => {
      this.setState({
        answer: {
          decimal: answer,
          binary: decimalToBinary(answer),
        },
      }, fn);
    };
  }


  render() {
    const { value1, value2, answer } = this.state;
    const { heading } = this.props;

    return (
      <>
        <h3>
          {heading}
          {' '}
          :
          {' '}
        </h3>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col"> Decimal </th>
              <th scope="col">Binary</th>
            </tr>
          </thead>
          <tbody>

            {/* value1 of Binary and Decimal here */}
            <tr>
              <td>
                <input
                  type="text"
                  name="value1Decimal"
                  data-id="1-d"
                  className="form-control"
                  onChange={this.onValueEntered}
                  value={value1.decimal}
                  maxLength="10"
                  onClick={(e) => { e.target.select(); }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="value1Binary"
                  data-id="1-b"
                  className="form-control text-right"
                  onChange={this.onValueEntered}
                  value={value1.binary}
                  maxLength="31"
                  onClick={(e) => { e.target.select(); }}
                />
              </td>
            </tr>

            {/* value2 of Binary and Decimal here */}
            <tr>
              <td>
                <input
                  type="text"
                  name="value2Decimal"
                  data-id="2-d"
                  className="form-control"
                  onChange={this.onValueEntered}
                  value={value2.decimal}
                  maxLength="10"
                  onClick={(e) => { e.target.select(); }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="value2Binary"
                  data-id="2-b"
                  className="form-control text-right"
                  onChange={this.onValueEntered}
                  value={value2.binary}
                  maxLength="31"
                  onClick={(e) => { e.target.select(); }}
                />
              </td>
            </tr>

            {/* Answer(AND of value1 and value2) here */}
            <tr>
              <td>
                <input
                  type="text"
                  name="answerDecimal"
                  data-id="0-d"
                  className="form-control"
                  value={answer.decimal}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  name="answerBinary"
                  data-id="0-b"
                  className="form-control text-right"
                  value={answer.binary}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

Common.propTypes = {
  heading: PropTypes.string.isRequired,
  operationName: PropTypes.string.isRequired,
};
