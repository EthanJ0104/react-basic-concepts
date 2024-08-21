import React, { Component } from 'react';

class Country extends Component {
  state = {
    country: 'United States',
    medalCount: 0,
  }

  handleIncrement = () => {
    this.setState(prevState => ({ medalCount: prevState.medalCount + 1 }));
  }
  handleDecrement = () => {
    this.setState(prevState => ({ medalCount: prevState.medalCount - 1 }));
  }
  render() { 
    return (
      <div className="country">
        <h1>{this.state.country}</h1>
        <p>Medal Count: {this.state.medalCount}</p>   
        <button onClick={ this.handleIncrement }>+</button>
        <button onClick={ this.handleDecrement }>-</button>
      </div>
    );
  }
}

export default Country