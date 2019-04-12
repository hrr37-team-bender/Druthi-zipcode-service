import React, {Component} from 'react';
import styles from '../styles.css';
import OtherStoresModal from './OtherStoresModal.jsx';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#app');
ReactModal.defaultStyles.overlay.backgroundColor = '#403235ad';

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
    var customStyles = {
      content: {
        left: '30%',
        right: '37%'
      }
    };
    return (
      <div className="other_stores">
        <span onClick={this.handleOpenModal}>Check Other Stores</span>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <OtherStoresModal productId={this.props.productId} zipcode={this.props.zipcode}/>
        </ReactModal>
      </div>
    );
  }
}

export default OtherStores;