import React from 'react';
import Button from '../Button/Button';
import logo from '../../logo.png';
import SidebarMainContent from './SideBarMainContenet/SideBarMainContent';
import SideBarReadctorContent from './SideBarRedactorContent/SideBarRedactorContent';
import CreateConspectContainerSidebar from './SideBarCreatorContent/SideBarCreatorContainer';
import { Route } from 'react-router-dom';


import { bool, func } from 'prop-types';
import styled from 'styled-components';
const StyledSideBar = styled.div`
    margin: 0;
    padding: 20px;
    /*padding-left: 20px;
    padding-right: 20px;*/

    background-color: rgb(220, 222, 234);
    color: black;
    position: fixed;
    width:220px;
    height: 100vh;
    overflow: auto;
    z-index: 200;

/*уголок магии. не трогать*/
left: ${({ open }) => open ? '0%' : '-100%'};
transition-delay: 0s;
transition-duration: 1s;
transition-property: left;
transition-timing-function: ease-in-out;

 /*animation: slide-open 1s forwards;
@keyframes slide-open{
    0% {left: -100%;}
    100% {left:0;}
} */ 

#crutch{
    margin: 20px auto 20px auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

a {
    background-color:#02dac5;
    padding: 0 0 0 0;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    display: block;
    text-align:center;
    padding-top:5px;
    padding-bottom:5px;
    margin-left: auto;
    margin-right: auto;

    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: ease;

/*transition-delay: 0s;
transition-duration: 1s;
transition-timing-function: ease-in-out;*/
  }

  a:hover {
    background-color:#018786;
    color: #f1f1f1;
  }

  
`;


const SideBar=(props) =>{
    return (

        <StyledSideBar  open={props.open}>
        <h2>Welcome.</h2>
        <img src={logo} alt="some value" id="crutch" />
        <br></br>
        <div className="SidebarContent">
            <Route path="/content" render = {()=> <SidebarMainContent CurrentConspect={props.CurrentConspect}/>}/>
            <Route path="/redactor"  render={()=><SideBarReadctorContent Conspects={props.Conspects}/>}/>
            <Route path="/creteconspect"  render={()=><CreateConspectContainerSidebar/>}/>
        </div>
            <Button text="Выйти" path="content"/> 
            {/* <button id="close">&times; close</button> */}
    </StyledSideBar>
    )
}

//<StyledSideBar  open={props.open} onClick={() => props.setOpen(!props.open)}  >
 //goes into Styles<a href="javascript:void(0)" class="closebtn" onclick={"onClick()"}>&times;</a>
SideBar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default SideBar;
