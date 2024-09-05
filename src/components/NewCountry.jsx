import React, { Component } from 'react';

class NewCountry extends Component {
  state = {
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0,
    errors: '' // State to track validation errors
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the country field
    if (this.state.country.trim() === '') {
      this.setState({ errors: 'Country name is required.' });
      return; // Stop form submission if validation fails
    }

    // If validation passes, clear errors and proceed
    this.setState({ errors: '' });
    
    const { country, gold, silver, bronze } = this.state;
    this.props.onAdd(country, Number(gold), Number(silver), Number(bronze));

    // Clear form after submission
    this.setState({ country: '', gold: 0, silver: 0, bronze: 0 });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country Name"
            value={this.state.country}
            onChange={this.handleChange}
          />
          {/* Display error message if validation fails */}
          {this.state.errors && <p style={{ color: 'red' }}>{this.state.errors}</p>}
        </div>

        <input
          type="number"
          name="gold"
          placeholder="Gold Medals"
          value={this.state.gold}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="silver"
          placeholder="Silver Medals"
          value={this.state.silver}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="bronze"
          placeholder="Bronze Medals"
          value={this.state.bronze}
          onChange={this.handleChange}
        />
        <button type="submit">Add Country</button>
      </form>
    );
  }
}

export default NewCountry;
