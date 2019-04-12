import React from 'react';
import styles from '../styles.css';

var SingleStore = ({store}) => {
  return (
    <div className='single_store_container'>
      {store.address}
    </div>
  );
};

export default SingleStore;