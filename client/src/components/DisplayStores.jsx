import React from 'react';
import SingleStore from './SingleStore.jsx';

var DisplayStores = ({stores, productId}) => {
  return (
    <div>
      {stores.map((store, index) => {
        return <SingleStore productId={productId} key={index} store={store}/>;
      })}
    </div>
  );
};

export default DisplayStores;