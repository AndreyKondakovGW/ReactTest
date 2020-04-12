import React from 'react';
import Content from './Content/Content.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspectContainer from './MyConspect/MyConspectContainer.jsx';
import Viewer from './ConspetctViewer/ConspetctViewer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx'
import {Route } from 'react-router-dom';
import s from './Main.module.css'


const Main=(props) =>{
    return (
        <div className={s.main}>
            <Route exact path = "/content" render = {() => <Content Topics={props.Topics}/>} />
            <Route path = "/content/:contentname" render = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/>

            <Route exact path ="/myconspects" render ={() => <MyConspectContainer/>} />
            <Route path = "/myconspects/:contentname" render = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/> 
            
            <Route exact  path = "/creteconspect" render = {() => <div>{props.OpenEmptyConspect()}<CreateConspectContainer/></div>} />
            <Route path = "/creteconspect/:conspect" render = {() => <div>{props.GiveCurrentCOnspectCreator(props.CurrentConspect)}<CreateConspectContainer/></div>} />

            <Route path = "/redactor/:conspectname" render = {() => <RedactorContainer/>} />
        </div>
    )
}

export default Main;