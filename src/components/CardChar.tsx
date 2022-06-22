import React from 'react';
import Card  from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import CharacterProps from '../interfaces/Character';

export default function CardChar(props:CharacterProps){
    return(
    <><Card style={{ width: '12rem' ,margin:'10px'}}>
    <Card.Img variant="top" src={props.img} style={{maxHeight:'232px'}} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
       {`Estado: ${props.status}`}<br/>
       {`Alias: ${props.nickname}`}<br/>
       {`Actor: ${props.portrayed}`}
      </Card.Text>

    </Card.Body>
  </Card>
  </>)
}


