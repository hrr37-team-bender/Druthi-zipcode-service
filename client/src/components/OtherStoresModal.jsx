// These two containers are siblings in the DOM
import React, {Component} from 'react';
import styles from '../styles.css';

class OtherStoresModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 'ten_miles'
    };
    this.onChangeDistance = this.onChangeDistance.bind(this);
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value
    });
  }



  render() {
    var {zipcode} = this.props;
    return <div>
      <p>Select a Store(Showing near ZIP "{zipcode}")</p>
      <select
        value={this.state.distance}
        onChange={this.onChangeDistance}>
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