import React from 'react';
import Button from '../Button/Button';
import s from './SideBar.module.css';
import logo from '../../logo.png';
import SidebarMainContent from "./SideBarMainContenet/SideBarMainContent";
import SideBarReadctorContent from "./SideBarRedactorContent/SideBarRedactorContent"
import { Route } from 'react-router-dom';


const SideBar=() =>{
    return (
        <div className={s.sidebar}>
            <div>
                <img src={logo} alt="some value"/>
            </div>
            <div className="SidebarContent">
                <Route path="/content" component = {SidebarMainContent}/>
                <Route path="/redactor" component={SideBarReadctorContent}/>
            </div>
            <Button text="Выйти" path=""/> 
        </div>
    )
}

export default SideBar;