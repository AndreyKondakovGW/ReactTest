import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const StyledContentbox = styled.div`
   a {
    background-color:#02dac5;
    padding: 0 0 0 0;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    display: block;
    text-align:center;
    padding-top:5px;
    padding-bottom:5px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
width:200px;
height:60px;
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
        <NavLink to={this.props.path}>{this.props.text}</NavLink> 
</StyledContentbox>

    )
    }
}

export default Contentbox;