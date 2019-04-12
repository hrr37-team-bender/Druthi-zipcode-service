// These two containers are siblings in the DOM
import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';
import DisplayStores from './DisplayStores.jsx';

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

  onChangeDistance(distance, zipcode) {
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

  componentDidMount() {
    let zipcode = this.props.zipcode;
    this.onChangeDistance('ten_miles', zipcode);
  }


  render() {
    var {zipcode, productId} = this.props;
    var {stores} = this.state;
    return <div>
      <p>Select a Store(Showing near ZIP "{zipcode}")</p>
      <span>Showing stores within</span>
      <select
        className='select_distance'
        value={this.state.distance}
        onChange={(e) => this.onChangeDistance(e.target.value, zipcode)}>
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
      <DisplayStores productId={productId} stores={stores}/>
    </div>;
  }
}


export default OtherStoresModal;