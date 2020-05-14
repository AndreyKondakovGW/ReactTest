import React from 'react';
import styled from 'styled-components';
const StyledActionBox = styled.div`
font-size: 1em;
width:180px;
height:35px;
line-height: 35px;
padding-left:6px;

background-color:#02dac5;
color: black;

box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
transition: box-shadow .3s,
            color .3s;
        
:hover{
    box-shadow: none;
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
        <StyledActionBox 
                className="actionbox" 
                onClick={this.onclik}>
            {this.props.icon} {this.props.text} 
        </StyledActionBox>
    )
    }
}

export default ActionBox; 