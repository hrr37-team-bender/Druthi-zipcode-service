import React, {Component} from 'react';
import SearchZipcode from './SearchZipcode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SearchZipcode />
      </div>
    );
  }
}
export default App;