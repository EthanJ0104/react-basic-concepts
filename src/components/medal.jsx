import React, { Component } from 'react';

class Medal extends Component {
  render() {
    return (
      <div className="medal">
        <h3>{this.props.type} Medals: {this.props.count}</h3>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

export default Medal;
