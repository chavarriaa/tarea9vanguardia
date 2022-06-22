import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Characterdata from "../interfaces/Character";
import { SpoilerAPI } from "../API";
import { Col,Row } from "react-bootstrap";

export default function Spoiler() {
  const [data, setData] = React.useState<Characterdata>();
  React.useEffect(() => {
    async function fetch() {
      try {
        const result = await SpoilerAPI.get();
        setData(result);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }

    fetch();
  }, []);

  return (
    <>

    <Row>
        <Col md={4}/>
    <Col>
    <h1>Te espoileaste! u.u</h1>
      <Card style={{ width: "24rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={data?.img || ""}
         
        />
        <Card.Body>
          <Card.Title>{data?.death || ""}</Card.Title>
          <Card.Text>
            {`Alias: ${data?.nickname || ""}`}
            <br />
            {`causa: ${data?.cause || ""}`}
            <br />
            {`Episodio: S${data?.season} E${data?.episode}`}
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </>
  );
}
