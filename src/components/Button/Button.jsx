import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const StyledButton = styled.div`
color: black;
background-color:#02dac5;
font-size: 1em;
width:180px;
height:35px;
line-height: 35px;
text-align:center;
vertical-align:middle;

margin-left:5px;
margin-right: 5px;
    
display: block;
margin-top:15px;
margin-bottom: 15px;

:hover{
    background-color:#018786;
    color: #f1f1f1;
}

    a {
        background-color:#02dac5;
        color:rgb(0,0,0);
        text-decoration: none;
        display: block;
        width:180px;
        height:35px;
        line-height: 35px;
        transition-property: color;
        transition-duration: 1s;
        transition-timing-function: ease;
    
    }
    a:hover{
        background-color:#018786;
        color: #f1f1f1;
    }
    

`;
const Button=(props) =>{
    return (
        <StyledButton className="unselectable">
            <NavLink to ={"/"+props.path}>
                {props.text} {props.icon}
            </NavLink> 
        </StyledButton>
    )
}
export default Button;