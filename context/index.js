
import React, { useState, useEffect } from 'react'

const DataContext = React.createContext();

const DataProvider = (props) => {
  let url = `https://api.covid19india.org/data.json`
  const [ data, setData] = useState({});

  const fetchData = async () =>{
    try {
      const apiCall = await fetch(url);
      const data = await apiCall.json();
      setData(data);
    }catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{data}}>
      {props.children}
    </DataContext.Provider>
  )
}
export { DataProvider,  DataContext }