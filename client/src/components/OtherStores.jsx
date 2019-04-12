import React, {Component} from 'react';
import styles from '../styles.css';
import OtherStoresModal from './OtherStoresModal.jsx';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#app');

class OtherStores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div className="other_stores">
        <button onClick={this.handleOpenModal}>Check Other Stores</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <OtherStoresModal zipcode={this.props.zipcode}/>
        </ReactModal>
      </div>
    );
  }
}

export default OtherStores;