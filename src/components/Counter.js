import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super();
  }
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
    console.log(this.state.counter);
  };

  handleDecrement = ()=>{
    this.setState({
      counter: this.state.counter - 1,
    })
    console.log(this.state.counter);
  };
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}
export default Counter;
