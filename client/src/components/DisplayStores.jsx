import React from 'react';
import SingleStore from './SingleStore.jsx';

var DisplayStores = ({stores}) => {
  return (
    <div>
      {stores.map((store, index) => {
        return <SingleStore key={index} store={store}/>;
      })}
    </div>
  );
};

export default DisplayStores;