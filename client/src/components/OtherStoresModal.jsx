// These two containers are siblings in the DOM
import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';

let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3004'
};

class OtherStoresModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 'ten_miles',
      stores: []
    };
    this.onChangeDistance = this.onChangeDistance.bind(this);
  }

  onChangeDistance(e, zipcode) {
    let distance = e.target.value;
    axios({
      method: 'get',
      url: `${url[mode]}/stores`,
      params: {
        zipcode,
        distance
      },
      'content-type': 'application/json'
    })
      .then((response) => {
        this.setState({
          stores: response.data,
          distance
        });
      });
  }
  render() {
    var {zipcode} = this.props;
    return <div>
      <p>Select a Store(Showing near ZIP "{zipcode}")</p>
      <select
        value={this.state.distance}
        onChange={(e) => this.onChangeDistance(e, zipcode)}>
        <option value='ten_miles'>
          10 miles
        </option>
        <option value='twenty_miles'>
          20 miles
        </option>
        <option value='fifty_miles'>
          50 miles
        </option>
        <option value='hundred_miles'>
          100 miles
        </option>
        <option value='all'>
          6.2 pc(All locations)
        </option>
      </select>

    </div>;
  }
}


export default OtherStoresModal;