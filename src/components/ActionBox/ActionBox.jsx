import React from 'react';
import styled from 'styled-components';
const StyledActionBox = styled.div`

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

display: inline-block;
margin-top:15px;
margin-bottom: 15px;

transition-property: color;
transition-duration: 1s;
transition-timing-function: ease;

:hover{
    background-color:#018786;
    color: #f1f1f1;
    cursor: pointer
}

`;

class ActionBox extends React.Component{
    onclik =()=>{
        this.props.action()
    }
    render(){
        return(
        <StyledActionBox onClick={this.onclik} >
            
            {this.props.text} {this.props.icon}
           
            </StyledActionBox>
    )
    }
}

export default ActionBox; 