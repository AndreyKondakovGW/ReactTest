import React from 'react';
import Button from '../Button/Button';
import logo from '../../logo.png';
import { bool, func } from 'prop-types';

import { Pencil,FileEarmarkPlus, BoxArrowInRight} from 'react-bootstrap-icons';
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
    height: 100vh;
    overflow: auto;
    z-index: 200;

/*уголок магии. не трогать*/
left: ${({ open }) => open ? '0%' : '-100%'};
transition-delay: 0s;
transition-duration: .4s;
transition-property: left;
transition-timing-function: ease-in-out;

#logo{
    margin: 20px auto 20px auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
#search{
    width:180px;
    height:35px;
    line-height: 35px;
    margin-left:4px;
    margin-top:15px;
    margin-bottom:15px;
    display: block;
}

`;
const StyledLine = styled.div`
    background-color: rgb(0,0,0);
    color: black;
    position: fixed;
    width:220px;
    height: 100vh;
    z-index: 201;
`;

const SideBar=(props) =>{
    let openemptyconspect=()=>{
        props.OpenEmptyConspect()
    }
    return (
        <StyledSideBar  open={props.open}>
            
        <h2>Welcome.</h2>
        <img src={logo} alt="some value" id="logo" />
        <div className="SidebarContent">
            <Button text='Мои Конспекты' path="myconspects" />
            <Button text='Мои тэги' path="content" />
            <Button text='Создать Конспект' 
                    path="creteconspect" 
                    icon={<FileEarmarkPlus/>} 
                    onClick={openemptyconspect} />
            <Button text='Редактор' path={"redactor/"+props.CurrentConspect.name} icon={<Pencil/>}  />
            <Button text='Создать выборку' path="topicrequest" />  
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

//        <form action="" method="post" >
//<input type="text"  name ="img_name" id="search" placeholder="Поиск..." required autoFocus></input>
//<Button text='Открыть' icon={<Search/>} />      
//</form>