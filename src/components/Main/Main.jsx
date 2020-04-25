import React from 'react';
import MyTopicsContainer from './Content/TopicsContainer.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspectContainer from './MyConspect/MyConspectContainer.jsx';
import ConspectViewerContainer from './ConspetctViewer/ConspectViewerContainer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx';
import TagRequestContainer from './TagRequestReducer/TagRequestContainer.jsx';
import {Route } from 'react-router-dom';
import * as axios from 'axios';

import { bool, func } from 'prop-types';
import styled from 'styled-components';
const StyledMain = styled.div`
display:inline-block;
  float:right;
  width: 100%;
height: auto;
padding-left:20px;
padding-right:20px;

/*уголок магии. не трогать*/
margin-left:${({ open }) => open ? '220px' : '0px'};
transition-delay: 0s;
transition-duration: .4s;
transition-property: margin-left;
transition-timing-function: ease-in-out;


background: url(/bground2.jpg) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
/*background-position: center;*/

.closebtn{
  z-index:1000;
  margin:40px;
}
`;

const Main=(props) =>{
  /*
    let logout=()=>{
      console.log("logout")
      axios.get("http://127.0.0.1:5000/logout")
    }
    */
    return (
       
        <StyledMain open={props.open} >
            
            <Route exact path = "/content" render = {() => <MyTopicsContainer/>} />
            <Route path = "/content/:contentname" component = {ConspectViewerContainer}/>
            
            <Route exact path ="/myconspects" render ={() => <MyConspectContainer/>} />
            <Route path = "/myconspects/:contentname/:id" component = {ConspectViewerContainer}/> 
            
            <Route exact  path = "/creteconspect" render = {() => <div><CreateConspectContainer/></div>} />
            <Route path = "/creteconspect/:conspect" component = {CreateConspectContainer}/>
            <Route path = "/redactor/:conspectname" component = {RedactorContainer} />
            <Route path = "/creteconspect/:conspect/:id" component = {CreateConspectContainer}/>
            <Route path = "/redactor/:conspectname/:id" component = {RedactorContainer} />
            <Route path="/topicrequest" component={TagRequestContainer}/>


            
        </StyledMain>
    )
}

Main.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Main;

//<Route path="/logout" render = {() => <div>{logout()}</div>} />