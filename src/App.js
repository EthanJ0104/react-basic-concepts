// import React, { Component } from 'react';
// import './App.css';
// import Country from './components/country';

// class App extends Component {
//   state = {
//     countries: [
//       { id: 1, country: 'United States', goldMedals: 5 },
//       { id: 2, country: 'China', goldMedals: 3 },
//       { id: 3, country: 'Russia', goldMedals: 2 },
//     ]
//   }
//   handleIncrement = (countryId) => {
//     this.setState(prevState => ({
//       countries: prevState.countries.map(country =>
//         country.id === countryId ? { ...country, goldMedals: country.goldMedals + 1 } : country
//       )
//     }));
//   }
//   handleDecrement = (countryId) => {
//     this.setState(prevState => ({
//       countries: prevState.countries.map(country =>
//         country.id === countryId && country.goldMedals > 0 
//           ? { ...country, goldMedals: country.goldMedals - 1 } 
//           : country
//       )
//     }));
//   }  
//   render() { 
//     return ( 
//       <div className="App">
//         <header className="App-header">
          
//         </header>
//         { this.state.countries.map(country =>
//            <Country
//             key={ country.id }
//             onIncrement={() => this.handleIncrement(country.id) }
//             onDecrement={() => this.handleDecrement(country.id) }
//             country={ country.country } 
//             goldMedals={ country.goldMedals }
//            />) }
//       </div>
//      );
//   }
// }
 
// export default App;

import React, { Component } from 'react';
import './App.css';
import Country from './components/country';
import NewCountry from './components/NewCountry';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', medals: { gold: 5, silver: 3, bronze: 2 } },
      { id: 2, country: 'China', medals: { gold: 3, silver: 4, bronze: 1 } },
      { id: 3, country: 'Russia', medals: { gold: 2, silver: 2, bronze: 5 } },
    ]
  };

  handleDelete = (countryId) => {
    this.setState(prevState => ({
      countries: prevState.countries.filter(country => country.id !== countryId)
    }));
  };

  // handleAdd = (country, gold, silver, bronze) => {
  //   const { countries } = this.state;
  //   const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
  //   const mutableWords = countries.concat({ id: id, country: country, gold: gold, silver: silver, bronze: bronze });
  //   this.setState({ countries:mutableWords });
  // }

  handleAdd = (country, gold, silver, bronze) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const newCountry = { 
      id: id, 
      country: country, 
      medals: { gold: gold, silver: silver, bronze: bronze }  // Nest the medals here
    };
    const updatedCountries = countries.concat(newCountry);
    this.setState({ countries: updatedCountries });
  }
  

  handleIncrement = (countryId, type) => {
    this.setState(prevState => ({
      countries: prevState.countries.map(country =>
        country.id === countryId 
          ? { ...country, medals: { ...country.medals, [type]: country.medals[type] + 1 } } 
          : country
      )
    }));
  };

  handleDecrement = (countryId, type) => {
    this.setState(prevState => ({
      countries: prevState.countries.map(country =>
        country.id === countryId && country.medals[type] > 0
          ? { ...country, medals: { ...country.medals, [type]: country.medals[type] - 1 } }
          : country
      )
    }));
  };

  getGrandTotalMedals = () => {
    return this.state.countries.reduce((total, country) => {
      return total + country.medals.gold + country.medals.silver + country.medals.bronze;
    }, 0);
  };

  render() {
    const grandTotalMedals = this.getGrandTotalMedals();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Olympic Medal Tracker</h1>
        </header>
        {this.state.countries.map(country =>
          <Country
            key={country.id}
            country={country.country}
            medals={country.medals}
            onIncrement={(type) => this.handleIncrement(country.id, type)}
            onDecrement={(type) => this.handleDecrement(country.id, type)}
            onDelete={() => this.handleDelete(country.id)}
          />
        )}
        <h2>Grand Total Medals: {grandTotalMedals}</h2>
        <NewCountry onAdd={ this.handleAdd } />
      </div>
    );
  }
}

export default App;

