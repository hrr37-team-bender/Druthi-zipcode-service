import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';

let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3004'
};

class SearchZipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchZipcodeAPI = this.searchZipcodeAPI.bind(this);
  }
  onInputChange(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  searchZipcodeAPI() {
    axios({
      method: 'get',
      url: `${url[mode]}/checkZipcode`,
      params: {
        zipcode: this.state.zipcode
      },
      'content-type': 'application/json'
    })
      .then((response) => {
        this.setState({
          smallImages: response.data,
          displayImage: response.data[0],
          selectedImage: response.data[0]
        });
      });
  }

  render() {
    return (
      <div className="search_zipcode_container">
        <form>
          <label>
            Enter your ZIP Code to view your availability
          </label>
          <input
            type="text"
            placeholder="ZIP Code"
            value={this.state.zipcode}
            onChange={this.onInputChange}
          >
          </input>
          <button
            className="button"
            onSubmit={this.searchZipcodeAPI}
          >
          Submit
          </button>
        </form>
      </div>

    );
  }
}
export default SearchZipcode;