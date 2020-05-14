import React from 'react';
import { NavLink } from 'react-router-dom';
import {X} from 'react-bootstrap-icons';
import bobr from '../../../../static/images/bobr1.png';
import styled from 'styled-components';
const StyledLine = styled.div`

text-align: left;
*{
    display:inline-block;
}

`;
const StyledChecked = styled.div`
    border-radius: 5px;
    width: 24px;
    height: 24px;
    padding-left: 4px;
    margin-right:10px;
    svg{
        margin-bottom:2px;
    }
    background-color: rgb(255, 80, 80);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition: box-shadow .3s,
                color .3s;
    :hover{
        color: #f1f1f1;
        background-color:#c0afd3;
        cursor: pointer;
        box-shadow: none;
    }
`;
const StyledUnchecked = styled.div`
    border-radius: 5px;
    width: 24px;
    height: 24px;
    padding-left: 4px;
    background-color:#c0afd3;
    margin-right:10px;
    svg{
        margin-bottom:2px;
    }
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition: box-shadow .3s,
                color .3s;
    :hover{
        background-color: rgb(255, 80, 80);
        color: #f1f1f1;
        cursor: pointer;
        box-shadow: none;
    }
`;
const StyledConspectbox = styled.div`
display:inline-block;
a{
  width:166px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

    margin-bottom:5px;
    color: black;
    font-size: 1em;
    transition-property: color;
    transition-duration: .3s;
:hover{
    color: #f1f1f1;
}
}
    img{
        /*
        background-color:#DCDEEA;
        background-color:#f1f1f1;
        background-color:#02dac5;
        */
        background-color:rgba(255,255,255,0.35);
        background-color:#DCDEEA;
        /*мед*/
        background-color:rgb(255, 227, 179);
        /*баттеркап
        background-color:rgb(255, 250, 200);
        */
        
        border-radius: 110px;
        width: 200px;
        height: 200px;
        object-fit: cover;
        box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, .4);
        transition: box-shadow .3s;
        :hover{
            box-shadow: none;
        }
    }
`;

class Conspectbox extends React.Component{
    check=()=>{
        this.props.checkf(this.props.id)
    }
    checkbox=()=>{
        if (this.props.checked){
            return (
                <StyledChecked className ="checkbox" onClick={this.check}><X/></StyledChecked>)
        }
        else{
            return (<StyledUnchecked className ="checkbox" onClick={this.check}><X/></StyledUnchecked>)
        }
    }
    render(){
        return (
            <StyledConspectbox>
                <StyledLine>
                    {(!this.props.Readcted)?this.checkbox():<></>}
                    <NavLink to={this.props.path}>{this.props.name}</NavLink>
                </StyledLine>
                
                <NavLink className="noellipsis" to={this.props.path}>
                    <img src={bobr} alt="some value"/>
                    {/*<img src={this.props.img} alt="some value"/>*/}
                </NavLink>
            </StyledConspectbox>
        )
    
    }
}

export default Conspectbox;