import React, { useState } from 'react';
import {
  binaryToDecimal,
  decimalToBinary,
  isValidDecimal,
  isValidBinary,
} from '../utils/utils';
import Clear from './Clear';

function twosComplement(num) {
  if (typeof num === 'string') return 0;

  const bits = num.toString(2).length;

  let setAllbits = 1;
  for (let i = 1; i < bits; i++) setAllbits += 1 << i;

  // num ^ setAllbits -> inverted num
  return (num ^ setAllbits) + 1;
}

const zerosTwosComplement = twosComplement(0);

export default function TWOS_COMP() {
  const [values, setValues] = useState({ binary: '0', decimal: 0 });
  const [answer, setAnswer] = useState({
    binary: decimalToBinary(zerosTwosComplement),
    decimal: zerosTwosComplement,
  });

  const onValueEntered = (event) => {
    const value = (event.target.value === '') ? '0' : event.target.value;
    let twosComplementOfValue;

    switch (event.target.name) {
      case 'valueDecimal':
        if (!isValidDecimal(value)) break;

        setValues({
          binary: decimalToBinary(+value),
          decimal: +value,
        });

        twosComplementOfValue = twosComplement(+value);

        setAnswer({
          decimal: twosComplementOfValue,
          binary: decimalToBinary(twosComplementOfValue),
        });

        break;

      case 'valueBinary': {
        if (!isValidBinary(value)) break;

        const decimalOfValue = binaryToDecimal(value);

        setValues({ decimal: decimalOfValue, binary: value });

        twosComplementOfValue = twosComplement(decimalOfValue);

        setAnswer({
          decimal: twosComplementOfValue,
          binary: decimalToBinary(twosComplementOfValue),
        });

        break;
      }

      default:
        break;
    }
  };

  const reset = () => {
    setValues({
      binary: '0',
      decimal: 0,
    });
    setAnswer({
      binary: decimalToBinary(zerosTwosComplement),
      decimal: zerosTwosComplement,
    });
  };

  return (
    <>
      <h3>
        2&apos;s Complement
        {' '}
        {' '}
        <Clear setState={() => {
          reset();
        }}
        />
      </h3>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col"> Decimal </th>
            <th scope="col">Binary</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                type="text"
                className="form-control"
                name="valueDecimal"
                value={values.decimal}
                onChange={onValueEntered}
                maxLength="10"
                onClick={(e) => { e.target.select(); }}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control text-right"
                name="valueBinary"
                value={values.binary}
                onChange={onValueEntered}
                maxLength="31"
                onClick={(e) => { e.target.select(); }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                className="form-control"
                name="ansDecimal"
                value={answer.decimal}
                readOnly
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control text-right"
                name="ansBinary"
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
