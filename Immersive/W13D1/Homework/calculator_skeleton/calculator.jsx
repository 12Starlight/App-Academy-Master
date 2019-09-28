import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
      this.state = { result: 0, num1: "", num2: ""};
      this.setNum1 = this.setNum1.bind(this);
      this.setNum2 = this.setNum2.bind(this);
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);
      this.mult = this.mult.bind(this);
      this.div = this.div.bind(this);
      this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  mult(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  div(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" });
  }

  render(){
    /* Remember that any Javascript we do should happen before the return statement! */
    const { num1, num2, result } = this.state; // destructuring 

    return (
      <div>
        <h1>Awesome Calc</h1>
        <h1>{ result }</h1>
        <input onChange={ this.setNum1 } value={ num1 }/>
        <input onChange={ this.setNum2 } value={ num2 }/>
        <br />
        <button onClick={ this.clear }>Clear</button>
        <br />
        <button onClick={ this.add }>+</button>
        <button onClick={ this.subtract }>-</button>
        <button onClick={ this.mult }>*</button>
        <button onClick={ this.div }>/</button>
      </div>
    );
  }
}

export default Calculator;
