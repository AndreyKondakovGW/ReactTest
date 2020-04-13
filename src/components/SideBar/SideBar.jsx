import React from 'react';
import Button from '../Button/Button';
import s from './SideBar.module.css';
import logo from '../../logo.png';
import SidebarMainContent from './SideBarMainContenet/SideBarMainContent';
import SideBarReadctorContent from './SideBarRedactorContent/SideBarRedactorContent';
import CreateConspectContainerSidebar from './SideBarCreatorContent/SideBarCreatorContainer'
import { Route } from 'react-router-dom';


const SideBar=(props) =>{
    return (
        <div className={s.sidebar}>
            <div>
                <img src={logo} alt="some value"/>
            </div>
            <div className="SidebarContent">
                <Route path="/content" render = {()=> <SidebarMainContent CurrentConspect={props.CurrentConspect}/>}/>
                <Route path="/redactor" render={()=><SideBarReadctorContent Conspects={props.Conspects}/>}/>
                 <Route path="/creteconspect" render={()=><CreateConspectContainerSidebar/>}/>
            </div>
            <Button text="Выйти" path="content"/> 
        </div>
    )
}

export default SideBar;