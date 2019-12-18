import React from 'react'
import Common from './operations/commonDesign/Common.AND_OR_XOR'
import TwosComp from './operations/TWOS_COMP'

let OPERATIONS = [<Common heading="AND" operationName="AND" />, 
                  <Common heading="OR" operationName="OR" />, 
                  <Common heading="XOR" operationName="XOR" />,
                  <TwosComp />
                ]

export default ({ listOfOperations }) => (
    <div className="row">
        { Object.keys(listOfOperations).map((operation, key) => (

            listOfOperations[operation].isChecked 
            ? (
                <div className="m-4">
                    { OPERATIONS[key] }
                </div>
            ) 
            : (<></>)

        ))}
    </div>
)