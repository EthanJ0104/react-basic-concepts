// import React, { Component } from 'react';

// class Country extends Component {
//   render() { 
//     console.log(this.props);
//     return (
//       <div className="country">
//         <h1>{this.props.country}</h1>
//         <p>Gold Medals: {this.props.goldMedals}</p>   
//         <button onClick={ this.props.onIncrement }>+</button>
//         <button onClick={ this.props.onDecrement }>-</button>
//       </div>
//     );
//   }
// }

// export default Country;

import React, { Component } from 'react';
import Medal from './medal';

class Country extends Component {
  render() {
    const { country, medals, onIncrement, onDecrement } = this.props;
    const totalMedals = medals.gold + medals.silver + medals.bronze;

    return (
      <div >
        <h1>{country}</h1>
        <Medal
          type="Gold"
          count={medals.gold}
          onIncrement={() => onIncrement('gold')}
          onDecrement={() => onDecrement('gold')}
        />
        <Medal
          type="Silver"
          count={medals.silver}
          onIncrement={() => onIncrement('silver')}
          onDecrement={() => onDecrement('silver')}
        />
        <Medal
          type="Bronze"
          count={medals.bronze}
          onIncrement={() => onIncrement('bronze')}
          onDecrement={() => onDecrement('bronze')}
        />
        <h2>Total Medals: {totalMedals}</h2>
        <hr />
      </div>
    );
  }
}

export default Country;
