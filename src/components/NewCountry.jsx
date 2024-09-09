import React, { Component } from 'react';

class NewCountry extends Component {
  state = {
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0,
    showErrorToast: false // State to control showing/hiding the toast
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Validate the country field
    if (this.state.country.trim() === '') {
      // Show the error toast when validation fails
      this.setState({ showErrorToast: true });
      return; // Stop form submission if validation fails
    }

    // If validation passes, proceed with the add country logic
    const { country, gold, silver, bronze } = this.state;
    this.props.onAdd(country, Number(gold), Number(silver), Number(bronze));

    // Clear form and hide toast after successful submission
    this.setState({ country: '', gold: 0, silver: 0, bronze: 0, showErrorToast: false });
  };

  handleToastClose = () => {
    this.setState({ showErrorToast: false });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country Name"
              value={this.state.country}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <input
            type="number"
            name="gold"
            placeholder="Gold Medals"
            value={this.state.gold}
            onChange={this.handleChange}
            className="form-control"
          />
          <input
            type="number"
            name="silver"
            placeholder="Silver Medals"
            value={this.state.silver}
            onChange={this.handleChange}
            className="form-control"
          />
          <input
            type="number"
            name="bronze"
            placeholder="Bronze Medals"
            value={this.state.bronze}
            onChange={this.handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-3">Add Country</button>
        </form>

        {/* Bootstrap Toast */}
        <div
          className={`toast position-fixed bottom-0 end-0 p-3 ${this.state.showErrorToast ? 'show' : 'hide'}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 1 }}
        >
          <div className="toast-header">
            <strong className="me-auto">Error</strong>
            <button type="button" className="btn-close" onClick={this.handleToastClose}></button>
          </div>
          <div className="toast-body">
            Country name is required.
          </div>
        </div>
      </div>
    );
  }
}

export default NewCountry;
