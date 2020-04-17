import React from 'react';
import MyTopicsContainer from './Content/TopicsContainer.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspectContainer from './MyConspect/MyConspectContainer.jsx';
import ConspectViewerContainer from './ConspetctViewer/ConspectViewerContainer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx'
import {Route } from 'react-router-dom';
import s from './Main.module.css'


const Main=(props) =>{
    return (
        <div className={s.main}>
            <Route exact path = "/content" render = {() => <MyTopicsContainer/>} />
            <Route path = "/content/:contentname" component = {ConspectViewerContainer}/>

            <Route exact path ="/myconspects" render ={() => <MyConspectContainer/>} />
            <Route path = "/myconspects/:contentname" component = {ConspectViewerContainer}/> 
            
            <Route exact  path = "/creteconspect" render = {() => <div><CreateConspectContainer/></div>} />
            <Route path = "/creteconspect/:conspect" render = {() => <div>{props.GiveCurrentCOnspectCreator(props.CurrentConspect)}<CreateConspectContainer/></div>} />

            <Route path = "/redactor/:conspectname" render = {() => <RedactorContainer/>} />
        </div>
    )
}

export default Main;