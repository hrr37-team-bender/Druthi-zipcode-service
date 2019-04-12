import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';
import ZipcodeDetails from './ZipcodeDetails.jsx';


let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3004'
};

class SearchZipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      zipDetails: [],
      exists: null,
      errorZip: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchZipcodeAPI = this.searchZipcodeAPI.bind(this);
  }
  onInputChange(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  searchZipcodeAPI(e) {
    e.preventDefault();
    var {zipcode} = this.state;
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
    if (isValidZip) {
      axios({
        method: 'get',
        url: `${url[mode]}/checkZipcode`,
        params: {
          zipcode
        },
        'content-type': 'plain/text'
      })
        .then((response) => {
          this.setState({
            zipDetails: response.data,
            exists: response.data.length === 0 ? false : true,
            errorZip: response.data.length === 0 ? 'No stores found, enter another Zip Code' : ''
          });
        });
    } else {
      this.setState({
        errorZip: '*Please enter a valid 5-digit ZIP Code'
      });
    }

  }

  render() {
    var {zipDetails, errorZip} = this.state;
    var zipExists = zipDetails.length !== 0;
    return (
      <div>
        {!zipExists ? <div className="search_zipcode_container">
          <div>
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
              onClick={this.searchZipcodeAPI}
            >
            Submit
            </button>
            <p className="error">{errorZip}</p>
          </div>
        </div> : null}
        {zipExists ? <ZipcodeDetails details={zipDetails[0]}/> : null}
      </div>

    );
  }
}
export default SearchZipcode;