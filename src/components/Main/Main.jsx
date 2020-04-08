import React from 'react';
import Content from './Content/Content.jsx';
import RedactorContainer from './Redactor/ReadactorContainer.jsx';
import MyConspect from './MyConspect/MyConspect.jsx';
import Viewer from './ConspetctViewer/ConspetctViewer.jsx';
import CreateConspectContainer from './CreateConspect/CreateConspectContainer.jsx'
import {Route } from 'react-router-dom';
import s from './Main.module.css'


const Main=(props) =>{
    return (
        <div className={s.main}>
            <Route exact path = "/content" render = {() => <Content Topics={props.Topics}/>} />
            <Route exact path ="/myconspects" render ={() => <MyConspect Conspects={props.Conspects}/>} />
            <Route path = "/creteconspect" render = {() => <CreateConspectContainer/>} />
            <Route path = "/redactor/:conspectname" render = {() => <RedactorContainer/>} />
            <Route path = "/content/:contentname" render = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/>
            <Route path = "/myconspects/:contentname" render = {() =><Viewer CurrentConspect={props.CurrentConspect}/>}/> 
        </div>
    )
}

export default Main;