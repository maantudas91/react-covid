
import React, { useState, useEffect } from 'react'
import useFetchData  from '../hooks/useFetchData';

const DataContext = React.createContext();

const DataProvider = (props) => {
  const data = useFetchData("https://api.covid19india.org/data.json");

  return (
    <DataContext.Provider value={{data}}>
      {props.children}
    </DataContext.Provider>
  )
}
export { DataProvider,  DataContext }