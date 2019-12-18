import React, { useState } from 'react'
import { binaryToDecimal, decimalToBinary } from '../utils/conversion'

let zerosTwosComplement = twosComplement(0)

export default function TWOS_COMP() {

    const [values, setValues] = useState({ binary: "0", decimal: 0 })
    const [answer, setAnswer] = useState({ binary: decimalToBinary(zerosTwosComplement), decimal: zerosTwosComplement })

    let onValueEntered = (event) => {

        let value = event.target.value === "" ? 0 : event.target.value, twosComplementOfValue 

        switch(event.target.name) {

            case "valueDecimal" :
                setValues({
                    binary : decimalToBinary(+value),  
                    decimal : +value 
                })
                twosComplementOfValue = twosComplement(+value)
                setAnswer({
                    decimal : twosComplementOfValue,
                    binary : decimalToBinary(twosComplementOfValue)
                })
            break;

            case "valueBinary" : 
                let decimalOfValue = binaryToDecimal(value)
                setValues({ decimal : decimalOfValue, binary : value })
                twosComplementOfValue = twosComplement(decimalOfValue)
                setAnswer({
                    decimal : twosComplementOfValue,
                    binary : decimalToBinary(twosComplementOfValue)
                })
            break;

        }

    }


    return (
        <>
            <h3>2's Complement : </h3>
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
    )
}


function twosComplement(num) {

    if (typeof num === "string") return 0;

    let bits = num.toString(2).length

    let setAllbits = 1
    for (let i = 1; i < bits; i++) setAllbits += 1 << i

    // num ^ setAllbits -> inverted num
    return (num ^ setAllbits) + 1
}