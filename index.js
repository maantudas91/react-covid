import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import Map from './Map';
import './style.css';

const App = () => {

  const [ data, setData] = useState({});

  const fetchData = async () =>{
    const apiCall = await fetch('https://api.covid19india.org/data.json');
    const data = await apiCall.json();
    setData(data);
  }
  
  return (
    <div>
      <Map />
      <p>
        Start editing to see some magic happen :)
      </p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
