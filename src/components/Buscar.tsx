import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Characterdata from "../interfaces/Character";
import { CharacterAPI } from "../API";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CardChar from "./CardChar";

export default function Buscar() {
    const [data, setData] = React.useState<Characterdata[]>([]);
  const [nombre, setNombre] = React.useState<string>();
  async function buscar() {
    try {
      const result = await CharacterAPI.searchByName(nombre);
      setData(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    < div style={{ margin: "20px" }}>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="busca un personaje"
        />
        <Button onClick={buscar}>Buscar</Button>
      <Row >


        <Col md={4} />
        <Col>
        <Container style={{display:'flex',flexWrap:'wrap'}}>
          {data?data.map((item:any)=>(<CardChar {...item}/>)):""}
        </Container>
        </Col>
      </Row>
    </div>
  );
}
