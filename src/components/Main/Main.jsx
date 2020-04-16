import React from 'react';
import MyTopicsContainer from './Content/TopicsContainer.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspectContainer from './MyConspect/MyConspectContainer.jsx';
import Viewer from './ConspetctViewer/ConspetctViewer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx'
import {Route } from 'react-router-dom';
//import s from './Main.module.css'

import { bool, func } from 'prop-types';
import styled from 'styled-components';
const StyledMain = styled.div`
display:inline-block;
  float:right;
  width: 100%;
height: 100vh;
padding-left:20px;
padding-right:20px;

/*margin-left: 220px;*/
/*transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};*/

/*уголок магии. не трогать*/
margin-left:${({ open }) => open ? '220px' : '0px'};
transition-delay: 0s;
transition-duration: 1s;
transition-property: margin-left;
/*transition-timing-function: ease-in-out;
animation: slide-open 1s forwards;*/

background: url(/bground2.jpg) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-position: center;
`;

const Main=(props) =>{
    return (
       
        <StyledMain open={props.open} >
            
            <Route exact path = "/content" render = {() => <MyTopicsContainer/>} />
            <Route path = "/content/:contentname" component = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/>

            <Route exact path ="/myconspects" render ={() => <MyConspectContainer/>} />
            <Route path = "/myconspects/:contentname" render = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/> 
            
            <Route exact  path = "/creteconspect" render = {() => <div>{props.OpenEmptyConspect()}<CreateConspectContainer/></div>} />
            <Route path = "/creteconspect/:conspect" render = {() => <div>{props.GiveCurrentCOnspectCreator(props.CurrentConspect)}<CreateConspectContainer/></div>} />

            <Route path = "/redactor/:conspectname" render = {() => <RedactorContainer/>} />
            <button  class="closebtn" onClick={() => props.setOpen(!props.open)}     >&times;</button>
        
        </StyledMain>
    )
}

//<StyledMain open={props.open} onClick={() => props.setOpen(!props.open)}>
//<button  class="closebtn" onclick={"onClick"}     >&times;</button>
//open={open} onClick={() => setOpen(!open)}
Main.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Main;