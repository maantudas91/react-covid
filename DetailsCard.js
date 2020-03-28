import React, { useContext, useState, useEffect } from 'react';
import { DataProvider, DataContext } from './context/index';
import { Card } from 'react-bootstrap';
import { CaretUp } from 'react-bootstrap-icons';
import Delta from './Delta';

const DetailsCard = () => {
  const { data } = useContext(DataContext);
  const [cases, setCases] = useState({});
  //console.log(data);
  useEffect(() => {
    const totalCases = data.statewise && data.statewise.filter( item => item.state == 'Total');
    setCases(totalCases && totalCases[0]);
    //console.log(totalCases)
  }, [data]);
  console.log(cases)

  return (
    <>
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Confirmed Cases</Card.Title>
        <Card.Text>{cases && cases.confirmed || 0}</Card.Text>
        <Delta delta={cases && cases.delta} type='confirmed' />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Active Cases</Card.Title>
        <Card.Text>{cases && cases.active || 0}</Card.Text>
        <Delta delta={cases && cases.delta} type='active' />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Recovered Cases</Card.Title>
        <Card.Text>{cases && cases.recovered || 0}</Card.Text>
        <Delta delta={cases && cases.delta} type='recovered' />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Deceased Cases</Card.Title>
        <Card.Text>{cases && cases.deaths || 0}</Card.Text>
         <Delta delta={cases && cases.delta} type='deaths' />
      </Card.Body>
    </Card>
    </>
  );
}
export default DetailsCard;
