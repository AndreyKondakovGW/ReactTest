import React from 'react';
import { NavLink } from 'react-router-dom';
import {Plus,Dash} from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledLine = styled.div`
text-align: left;
margin-bottom:10px;
*{
    display:inline-block;
}
`;
const StyledChecked = styled.div`
    border-radius: 20%;
    width: 27px;
    height: 27px;
    padding-left: 6px;
    background-color: rgb(88, 214, 88);
    margin-right:10px;

    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;
    :hover{
        cursor: pointer;
        box-shadow: none;
    }
`;
const StyledUnchecked = styled.div`
border-radius: 20%;
    width: 27px;
    height: 27px;
    padding-left: 6px;
    background-color: rgb(255, 80, 80);
    margin-right:10px;

    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;
    :hover{
        cursor: pointer;
        box-shadow: none;
    }
`;
const StyledConspectbox = styled.div`
display:inline-block;
a{
    color: black;
    font-size: 1em;
    transition-property: color;
    transition-duration: .3s;
:hover{
    color: #f1f1f1;
}
}
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
        box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .4);
        transition-property: box-shadow;
        transition-duration: .3s;
        :hover{
            box-shadow: none;
        }
    }
`;

class Conspectbox extends React.Component{
    check=()=>{
        console.log('click')
        this.props.checkf(this.props.id)
    }
    checkbox=()=>{
        if (this.props.checked){
            return (
                <StyledChecked onClick={this.check}><Plus/></StyledChecked>)
        }
        else{
            return (<StyledUnchecked onClick={this.check}><Dash/></StyledUnchecked>)
        }
    }
    render(){
        return (
            <StyledConspectbox>
                <StyledLine>
                    {(!this.props.Readcted)?this.checkbox():<></>}
                    <NavLink to={this.props.path}>{this.props.name}</NavLink>
                </StyledLine>
                
                <NavLink to={this.props.path}>
                    <img src={this.props.img} alt="some value"/>
                </NavLink>
            </StyledConspectbox>
        )
    
    }
}

export default Conspectbox;