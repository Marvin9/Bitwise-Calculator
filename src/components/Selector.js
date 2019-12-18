import React, { Component } from 'react'
import BitwiseOperations from './BitwiseOperations'

export default class Selector extends Component {
    constructor() {
        super()
        this.state = {
            selectedOperations : {
                AND : { name : "AND", isChecked : 0},
                OR : { name : "OR", isChecked : 0},
                XOR : { name : "XOR", isChecked : 0},
                TWOS_COMPLEMENT : { name : "2'S COMPLEMENT", isChecked : 0}
            }
        }

        this.toggleCheck = (e) => {
            let previousSelectedOperation = this.state.selectedOperations
            let targetOperation = e.target.name 
            previousSelectedOperation[targetOperation].isChecked ^= 1

            this.setState({
                selectedOperations : previousSelectedOperation
            })
        }
    }
    render() {
        let { selectedOperations } = this.state 
        return (
            <>
                <div className="row">

                   { Object.keys(selectedOperations).map(operation => (
                       <div className="input-group mb-3 col-sm-3">
                           <div className="input-group-prepend">
                               <div className="input-group-text">
                            <input type="checkbox" name={operation} onChange={this.toggleCheck}/>
                               </div>
                           </div>
                           <input
                            type="text"
                            value={ selectedOperations[operation].name }
                            className="form-control"
                            readOnly 
                           />
                        </div>
                   )) }

                </div>

               <BitwiseOperations listOfOperations={selectedOperations}/>

            </>
        )
    }
}
