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
      <div className="row">
        <div className="headings_search">{store.address}</div>
        <div className="font_size_color_grey">{store.street}</div>
        {soldOut ? <div className="sold_out">SOLD OUT</div> :
          <div>
            <div style={{fontSize: '12px'}}>Ready For PickUp Today </div>
            <div className="font_size_color_grey">If ordered by 8:00 PM PST</div>
          </div>}
        <button className={soldOut ? 'add_to_cart_button add_to_cart_disabled' : 'add_to_cart_button'}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleStore;