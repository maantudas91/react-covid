import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { DataProvider } from './context/index';
import DetailsCard from './DetailsCard';

const App = () => {
  return (
    <DataProvider>
    <h3>Maantu Das</h3>
      <>
      <DetailsCard />
      <Map />
      </>
    </DataProvider>
  );
}
render( <App />, document.getElementById('root'));