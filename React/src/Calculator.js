import React from 'react';


class Cal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "op1": 0,
            "op2": 0,
            "res": 0
        }
    }

    op1function = (event) => {
        this.setState({ "op1": event.target.value })
    }

    op2function = (event) => {
        this.setState({ "op2": event.target.value })
    }

    addition = () =>{
        console.log("op1:" + this.state.op1)
        console.log("op2:" + this.state.op2)
        let add = parseInt(this.state.op1) + parseInt(this.state.op2)
        this.setState ({"res": add})
    }
    subtraction = () =>{
        console.log("op1:" + this.state.op1)
        console.log("op2:" + this.state.op2)
        let sub = parseInt(this.state.op1) - parseInt(this.state.op2)
        this.setState ({"res": sub})
    }
    Multiplication = () =>{
        console.log("op1:" + this.state.op1)
        console.log("op2:" + this.state.op2)
        let multi = parseInt(this.state.op1) * parseInt(this.state.op2)
        this.setState ({"res": multi})
    }
    Division = () =>{
        console.log("op1:" + this.state.op1)
        console.log("op2:" + this.state.op2)
        let div = parseInt(this.state.op1) / parseInt(this.state.op2)
        this.setState ({"res": div})
    }


    render() {
        return (
            <>
                <div>
                    <span>
                        Value1 : <input type="text"
                            value={this.state.op1}
                            onChange={this.op1function}></input>
                    Value2 : <input type="text"
                            value={this.state.op2}
                            onChange={this.op2function}></input>
                    </span>
                    <div>
        result : <span>{this.state.res}</span>
                    </div>
                    <div>
                        <button onClick={this.addition}>+</button>
                        <button onClick={this.subtraction}>-</button>
                        <button onClick={this.Multiplication}>*</button>
                        <button onClick={this.Division}>/</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Cal;