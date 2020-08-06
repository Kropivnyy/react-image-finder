import React, { Component } from 'react';
import './Searchbar.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };

  changeHandler = event => {
    this.setState({ query: event.currentTarget.value });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitHandler}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeHandler}
          ></input>
        </form>
      </header>
    );
  }
}

export default Searchbar;
