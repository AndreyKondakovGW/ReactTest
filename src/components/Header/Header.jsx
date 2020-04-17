import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { XDiamond } from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledHeader = styled.div`
  .navbar {
    background-color: rgb(220, 222, 234);
    border: 1px;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: rgb(0,0,0);
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color:#02dac5;
    }
  }
  .closebtn{
    margin-right:15px;
    background-color:#02dac5;
    border: 0;
    width:30px;
    height:30px;
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: ease;
    outline:none;
    padding-bottom:5px;
  }
  .closebtn:hover {
    background-color:#018786;
    color: #f1f1f1;
  }
  
  #basic-navbar-nav {
  
transition-delay: 0s;
transition-duration: .4s;
transition-property: height;
transition-timing-function: ease-in-out;
}
#myToggle{
  outline:none;
  
}
`;

const Header=(props)=>{
    return (
    <StyledHeader open={props.open}>
    <Navbar expand="sm" fixed="top">
    <button  class="closebtn" onClick={() => props.setOpen(!props.open)}><XDiamond /></button>
      <Navbar.Brand href="/">Conspect Structure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">Помощь</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">@{props.CurentUser}</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StyledHeader >
    )
}
export default Header;