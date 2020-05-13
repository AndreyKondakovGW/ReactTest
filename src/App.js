import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';

import SideBarContainer from './components/SideBar/SideBarContainer';
import MainContainer from './components/Main/MainContainer';
import { Row,  Container } from 'react-bootstrap';

import styled from 'styled-components';
const Styles = styled.div`
  background-color: rgb(220, 222, 234);
  width: 100%;
  height: 100vh;
`;

const App = (props) => {
  
 const [open, setOpen] = useState(false);
  return (
    <Styles>
    <React.Fragment>
        <Row>
          <HeaderContainer open={open} setOpen={setOpen}/>
        </Row>
        <Container fluid>
          <Row >
            <SideBarContainer  open={open} setOpen={setOpen}/>  
            <MainContainer open={open} setOpen={setOpen}/> 
          </Row>
        </Container>
    </React.Fragment>
    </Styles>
  );
}
export default App;
