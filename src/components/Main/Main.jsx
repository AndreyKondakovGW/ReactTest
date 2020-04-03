import React from 'react';
import Content from './Content/Content.jsx';
import Redactor from './Redactor/Redactor.jsx';
import MyConspect from './MyConspect/MyConspect.jsx';
import {Route } from 'react-router-dom';
import s from './Main.module.css'


const Main=(props) =>{
    return (
        <div className={s.main}>
            <Route exact path = "/content" render = {() => <Content Topics={props.state.Topics}/>} />
            <Route path ="/content/myconspects" render ={() => <MyConspect Conspects={props.state.Conspects}/>} />
            <Route path = "/redactor" component = {Redactor} />
        </div>
    )
}

export default Main;