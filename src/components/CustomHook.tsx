import React from "react";

import { Container,Row } from "react-bootstrap";
import {useUser} from '../context';

export default function Spoiler() {
 let {user,setUser} = useUser();

  return (
    <>
  <Container>
    <Row>
      <h1>  Tu variable del contexto es es: {user}</h1>
      </Row>
      </Container>
    </>
  );
}
