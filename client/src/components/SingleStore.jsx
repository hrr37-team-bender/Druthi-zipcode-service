import React from 'react';
import styles from '../styles.css';

var SingleStore = ({store, productId}) => {
  var productIds = store.product_ids.split(',');
  let soldOut = false;
  if (!productIds.includes(productId)) {
    soldOut = true;
  }
  return (
    <div className='single_store_container'>
      {store.address}
      {soldOut ? <p className="sold_out">SOLD OUT</p> :
        <div>
          <p>Ready For PickUp Today </p>
          <p>If ordered by 8:00 PM PST</p>
        </div>}
    </div>
  );
};

export default SingleStore;