import React, { Component } from 'react';
import './App.css';
import Country from './components/country';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', goldMedals: 5 },
      { id: 2, country: 'China', goldMedals: 3 },
      { id: 3, country: 'Russia', goldMedals: 2 },
    ]
  }
  handleIncrement = (countryId) => {
    this.setState(prevState => ({
      countries: prevState.countries.map(country =>
        country.id === countryId ? { ...country, goldMedals: country.goldMedals + 1 } : country
      )
    }));
  }
  handleDecrement = (countryId) => {
    this.setState(prevState => ({
      countries: prevState.countries.map(country =>
        country.id === countryId && country.goldMedals > 0 
          ? { ...country, goldMedals: country.goldMedals - 1 } 
          : country
      )
    }));
  }  
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          
        </header>
        { this.state.countries.map(country =>
           <Country
            key={ country.id }
            onIncrement={() => this.handleIncrement(country.id) }
            onDecrement={() => this.handleDecrement(country.id) }
            country={ country.country } 
            goldMedals={ country.goldMedals }
           />) }
      </div>
     );
  }
}
 
export default App;