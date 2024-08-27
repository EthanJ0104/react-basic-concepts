import React, { Component } from 'react';

class Country extends Component {
  render() { 
    console.log(this.props);
    return (
      <div className="country">
        <h1>{this.props.country}</h1>
        <p>Gold Medals: {this.props.goldMedals}</p>   
        <button onClick={ this.props.onIncrement }>+</button>
        <button onClick={ this.props.onDecrement }>-</button>
      </div>
    );
  }
}

export default Country;
