import React from 'react';


import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import {Route } from 'react-router-dom';

import logo from '../../logo.png';
import { bool, func } from 'prop-types';
import { 
    FileEarmarkText,
    StarFill,
    FileEarmarkPlus,
    StarHalf,
    Pencil,
    PeopleFill,
    BoxArrowInRight} from 'react-bootstrap-icons';
import styled from 'styled-components';


const StyledSideBar = styled.div`
    margin: 0;
    padding-left:16px;
    padding-right:24px;
    padding-top:20px;
    padding-bottom:20px;
    background-color: rgb(220, 222, 234);
    color: black;
    position: fixed;
    width:220px;
    height: 100%;
    overflow: auto;
    z-index: 200;
    text-align:center;
/*уголок магии. не трогать*/
left: ${({ open }) => open ? '0%' : '-100%'};
transition-delay: 0s;
transition-duration: .4s;
transition-property: left;
transition-timing-function: ease-in-out;

.logobox{
    margin-bottom: 8px;
}
.SidebarContent{
.button{
    margin-bottom:10px;
}
}

`;


const SideBar=(props) =>{
    let openemptyconspect=()=>{
        props.OpenEmptyConspect()
    }
    return (
    <StyledSideBar  open={props.open}>
        <h2>Welcome.</h2>
        <NavLink to ={"/main"} className="logobox">
            <img src={logo} alt="some value"  />
        </NavLink> 
        
        <div className="SidebarContent">
            <Button  text='Мои конспекты' icon={<FileEarmarkText/>} path="myconspects"/>
            <Button  text='Мои тэги'icon={<StarFill/>}  path="content" />
            <Button  text='Создать конспект' 
                    path="creteconspect/newconspect" 
                    icon={<FileEarmarkPlus/>} 
                    onClick={openemptyconspect} />
            <Button text='Создать выборку' icon={<StarHalf/>} path="topicrequest" />
            <Button text='Редактор' path={(props.CurrentConspect.id!==-1)?"redactor/"+props.CurrentConspect.name+"/"+props.CurrentConspect.id:"redactor/emptyconspect/"+props.CurrentConspect.id} icon={<Pencil/>}/>
            <Button text='Мои подписки' icon={<PeopleFill/>}  path={"comunity"}/>
        </div>
    <Button text="Выйти" path="logout" icon={<BoxArrowInRight/>} /> 
    </StyledSideBar>
    )
}

SideBar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default SideBar;