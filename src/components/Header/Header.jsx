import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { ChevronDoubleRight, ChevronDoubleDown } from 'react-bootstrap-icons';
import styled from 'styled-components';
import * as axios from 'axios';
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

  .navbar-brand{
    margin-right:0;
  }
  
  .closebtn{
    z-index:1000;
    margin-right:15px;
    background-color:#02dac5;
    border: 0;
    width:30px;
    height:30px;
    transform: ${({ open }) => open ? 'rotate(0.5turn)' : 'none'};
    box-shadow: ${({ open }) => open ? '-3px -3px 3px 0px rgba(0, 0, 0, .3)' : '3px 3px 3px 0px rgba(0, 0, 0, .3)'};
    transition: color 1s ease, 
                transform .4s ease-in-out,
                box-shadow .3s ease;
    outline:none;
    padding-bottom:5px;
  }

  .closebtn:hover {
    background-color:#018786;
    color: #f1f1f1;
    box-shadow: none;
  }
  
#basic-navbar-nav {
transition-delay: 0s;
transition-duration: .4s;
transition-property: height;
transition-timing-function: ease-in-out;
}
`;
const GetCurUser=(SetUsername)=>{
  axios.get('http://127.0.0.1:5000/get_current_user').then(response=>{
    console.log(response)
    SetUsername(response.data.name)
})
}
const Header=(props)=>{
    return (
    <StyledHeader open={props.open}>
    <Navbar expand="sm" fixed="top">
    <button  className="closebtn" onClick={() => props.setOpen(!props.open)}><ChevronDoubleRight /></button>
      <Navbar.Brand href="/">Conspect Structure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle" children={<ChevronDoubleDown/>}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/help">Помощь</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/comunity">@{(props.CurentUser==="")?GetCurUser(props.SetUsername):props.CurentUser}</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StyledHeader >
    )
}
export default Header;