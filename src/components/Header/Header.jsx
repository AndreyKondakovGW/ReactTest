import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: rgb(220, 222, 234);
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: rgb(0,0,0);
    &:hover {
      color: #018786;
    }
  }
`;

const Header=(props)=>{
    return (
        <Styles>
    <Navbar expand="sm">
      <Navbar.Brand href="/">Conspect Structure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
  </Styles >
    )
}
export default Header;