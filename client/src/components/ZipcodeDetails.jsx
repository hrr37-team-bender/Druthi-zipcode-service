import React, {Component} from 'react';
import styles from '../styles.css';
import axios from 'axios';
import moment from 'moment';
import OtherStores from './OtherStores.jsx';

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
    var { details, zipcode, productId } = this.props;
    var afterEight = moment().isAfter('08:00 pm');
    var afterThree = moment().isAfter('03:00 pm');
    return (
      <div>
        <div className="search_zipcode_container_display">
          <div className="headings_search">Store Pickup: Order Now to pick up Today</div>

          <span className="font_size_color_grey float_left">
            In {details.address}
          </span>
          <OtherStores productId={productId} zipcode={zipcode} />

          <div className="font_size_color_grey">
            If ordered by 8:00 PM PST
          </div>
        </div>
        <div className="search_zipcode_container_display">
          {afterThree ? <div className="headings_search">Local Delivery: Order Now to get it Tomorrow</div> : <div className="headings_search">Local Delivery: Order before 3 PM to get it Today</div>}
        </div>
        <div className="search_zipcode_container_display">
          {afterEight ? <div className="headings_search">Shipping Delivery: Order Now to get it Tomorrow</div> : <div className="headings_search">Shipping Delivery: Order before 8 PM to get it Today</div>}
        </div>
      </div>
    );
  }
}
export default ZipcodeDetails;