import React, { useContext, useState, useEffect } from 'react';
import { CaretUp } from 'react-bootstrap-icons';

const Delta = ({delta, type}) => {
  return (
    <>
    {delta && delta[type] > 0 ? <>[<CaretUp color='royalblue' size={15} /> {delta && delta[type]}] </>: null}
    </>
  );
}
export default Delta;
