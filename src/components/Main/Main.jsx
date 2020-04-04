import React from 'react';
import Content from './Content/Content.jsx';
import Redactor from './Redactor/Redactor.jsx';
import MyConspect from './MyConspect/MyConspect.jsx';
import CreateConspect from './CreateConspect/CreateConspect.jsx';
import Viewer from './ConspetctViewer/ConspetctViewer.jsx';
import {Route } from 'react-router-dom';
import s from './Main.module.css'


const Main=(props) =>{
    return (
        <div className={s.main}>
            <Route exact path = "/content" render = {() => <Content Topics={props.state.UserData.Topics}/>} />
            <Route exact path ="/myconspects" render ={() => <MyConspect Conspects={props.state.UserData.Conspects}/>} />
            <Route path = "/creteconspect" component = {CreateConspect} />
            <Route path = "/redactor/:conspectname" render = {() => <Redactor CurrentConspect={props.state.LogicData.CurrentConspect} ChangeCurPR={props.ChangeCurPR} ChangeCurPL={props.ChangeCurPL}/>} />
            <Route path = "/content/:contentname" render = {() =><Viewer CurrentConspect={props.state.LogicData.CurrentConspect}/>}/>
            <Route path = "/myconspects/:contentname" render = {() =><Viewer CurrentConspect={props.state.LogicData.CurrentConspect}/>}/> 
        </div>
    )
}

export default Main;