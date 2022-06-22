import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import { UserContext } from './context';
import Spoiler from './components/Spolier'
import Buscar from './components/Buscar'
import { useUser } from './context';
import Nav from 'react-bootstrap/Nav'
import Form  from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import CustomHook from './components/CustomHook';
export default function Header() {
  const [user,setUser] = React.useState<string>('');
 
  let userContextValue= {user,setUser};
  return (
    <UserContext.Provider value={userContextValue}>
      <BrowserRouter>
      <HeaderNavBar/>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/spoiler" element={<Spoiler/>} />
        <Route path="/buscar" element={<Buscar/>} />
        <Route path="/context" element={<CustomHook/>} />
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}



function HeaderNavBar(){
  let {user,setUser}= useUser();
return(  <>
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/spoiler">Spoileate una muerte</Nav.Link>
      <Nav.Link href="/buscar">Buscate un personaje</Nav.Link>
      <Nav.Link href="/context">Context y CustomHook</Nav.Link>
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Variable Context"
          className="me-2"
          aria-label="Search"
          value={user} onChange={(e)=>setUser(e.currentTarget.value)}
        />
        </Form>
    </Container>
  </Navbar>
  </>)
}