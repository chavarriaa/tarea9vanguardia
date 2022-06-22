import React from "react";
import { CharacterAPI } from "./API/";
import CardChar from "./components/CardChar";
import Container from 'react-bootstrap/Container';
import CharacterProps from "./interfaces/Character";
import FormCharacter from "./components/FormChar";
import { Button } from "react-bootstrap";



export default function App() {
const [CharacterList, setCharacterList] = React.useState<any>([]);
  async function fetch() {
    try {
      const result = await CharacterAPI.get(10, 10);
      setCharacterList(result);
    } catch (e) {
      console.error(e);
    }
  }

  React.useState(() => {
    fetch();

  });

  return (
    <>
      <h1>hello</h1>
      <FormCharacter trigger={<Button>Agregar</Button>}/>
      <Container style={{display:'flex',flexWrap:'wrap'}}>
        {CharacterList.map((item:CharacterProps)=>(
          <CardChar {...item} />
        ))}
      </Container>
      
    </>
  );
}
