import React, {Component} from 'react';
import SearchZipcode from './SearchZipcode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: ''
    };
  }
  componentDidMount() {
    let urlSplit = window.location.href.split('/');
    let productId = urlSplit[urlSplit.length - 2];
    this.setState({
      productId
    });
  }

  render() {
    return (
      <div>
        <SearchZipcode productId={this.state.productId}/>
      </div>
    );
  }
}
export default App;