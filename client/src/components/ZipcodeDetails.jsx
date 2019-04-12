import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';
import moment from 'moment';

let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3004'
};

class ZipcodeDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { details } = this.props;
    var afterEight = moment().isAfter('08:00 pm');
    var afterThree = moment().isAfter('03:00 pm');
    return (
      <div>
        <div className="search_zipcode_container">
          <p>Store Pickup: Order Now to pick up Today</p>
          <p>In {details.address}</p>
          <p>If ordered by 8:00 PM PST</p>
        </div>
        <div className="search_zipcode_container">
          {afterThree ? <p>Local Delivery: Order Now to get it Tomorrow</p> : <p>Local Delivery: Order before 3 PM to get it Today</p>}
        </div>
        <div className="search_zipcode_container">
          {afterEight ? <p>Shipping Delivery: Order Now to get it Tomorrow</p> : <p>Shipping Delivery: Order before 8 PM to get it Today</p>}
        </div>
      </div>
    );
  }
}
export default ZipcodeDetails;