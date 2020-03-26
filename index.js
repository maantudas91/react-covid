import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import Map from './Map';
import './style.css';
import { DataProvider } from './context/index';

const App = () => {
  return (
    <DataProvider>
      <DetailsCard />
      <Map />
    </DataProvider>
  );
}
render( <App />, document.getElementById('root'));