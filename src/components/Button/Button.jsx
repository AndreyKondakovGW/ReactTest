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

/*
margin-top:15px;
margin-bottom: 15px;
margin-left:5px;
margin-right: 5px;
*/

    
display: inline-block;
            
box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
transition-property: box-shadow;
transition-duration: .3s;
:hover{
    background-color:#018786;
    color: #f1f1f1;
    box-shadow: none;
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
    
    }
    a:hover{
        background-color:#018786;
        color: #f1f1f1;
    }
    

`;
const Button=(props) =>{
    return (
        <StyledButton className="button">
            <NavLink to ={"/"+props.path}>
                {props.text} {props.icon}
            </NavLink> 
        </StyledButton>
    )
}
export default Button;