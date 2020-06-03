import React from 'react';
import MyTopicsContainer from './Content/TopicsContainer.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspectContainer from './MyConspect/MyConspectContainer.jsx';
import ConspectViewerContainer from './ConspetctViewer/ConspectViewerContainer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx';
import TagRequestContainer from './TagRequestReducer/TagRequestContainer.jsx';
import SubscriberContainer from './Subscriber/SubscriberContainer';
import SubscribersContentContainer from './SubscribersContent/SubscribersContentContainer';
import HelloComponent from './HelloComponent/HelloComponent';

import {Route } from 'react-router-dom';
import * as axios from 'axios';

import { bool, func } from 'prop-types';
import bground2 from '../../static/bground2.jpg'
import styled from 'styled-components';
const StyledMain = styled.div`
display:inline-block;
text-align:center;

float:right;
width: 100vw;
height: 100vh;

overflow:auto;

position: relative;
padding-left:20px;
padding-right:20px;

/*уголок магии. не трогать*/
margin-left:${({ open }) => open ? '220px' : '0px'};
transition-delay: 0s;
transition-duration: .4s;
transition-property: margin-left;
transition-timing-function: ease-in-out;

background: url(${bground2}) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size:cover;

padding-top:56px;

.nomargin{
  margin:0px;
}
`;

const Main=(props) =>{
    let logout=()=>{
      axios.get(props.siteaddres+"logout")
      document.location.reload(true);
    }
    const {history}=props
    return (
        <StyledMain open={props.open} >
            <Route history={history} path ="/main" component = {HelloComponent}/>
            <Route history={history} exact path = "/content" render = {() => <MyTopicsContainer/>} />
            <Route history={history} path = "/content/:conspectname" component = {ConspectViewerContainer}/>
            <Route history={history} exact path ="/myconspects" render ={() => <MyConspectContainer/>} />
            <Route history={history} path = "/myconspects/:conspectname/:id/:option" component = {ConspectViewerContainer}/>
            <Route history={history} path = "/subscriberconspects/:conspectname/:id/:option" component = {ConspectViewerContainer}/>  
            <Route history={history} exact  path = "/creteconspect" render = {() => <div><CreateConspectContainer/></div>} />
            <Route history={history} path = "/creteconspect/:conspect/:id" component = {CreateConspectContainer}/>
            <Route history={history} path = "/creteconspect/newconspect" component = {CreateConspectContainer} />
            <Route history={history} path = "/redactor/:conspectname/:id" component = {RedactorContainer} />
            <Route history={history} path="/topicrequest" component={TagRequestContainer}/>
            <Route history={history} path="/logout" render = {() => <div>{logout()}</div>} />
            <Route history={history} exact path="/comunity" component={SubscriberContainer}/>
            <Route history={history} path="/comunity/:name/:id/conspect_and_tags" component={SubscribersContentContainer}/>
            <Route history={history} path="/sample_pdf" component={ConspectViewerContainer}/>
            <Route history={history} path = "/help" component = {ConspectViewerContainer}/>
        </StyledMain>
    )
}

Main.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Main;

