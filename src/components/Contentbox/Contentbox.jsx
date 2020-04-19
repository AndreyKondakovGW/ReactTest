import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const StyledContentbox = styled.div`
font-size: 1em;
display: block;
margin-top:15px;
margin-bottom: 15px;

text-align: center;
a {
    background-color:#02dac5;
    padding: 0 0 0 0;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    display: block;
    text-align:center;
    
    margin-left: 15px;
    margin-right: 15px;
width:180px;
height:35px;
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: ease;
    text-align: center;
}
a:hover{
    background-color:#018786;
    color: #f1f1f1;
}


`;

class Contentbox extends React.Component{
    render(){ 
    return (
<StyledContentbox>
        <NavLink to={this.props.path}>
            {this.props.text}
        </NavLink> 
</StyledContentbox>

    )
    }
}

export default Contentbox;