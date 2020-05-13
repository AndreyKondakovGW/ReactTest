import React from 'react';
import { NavLink } from 'react-router-dom';
import {Plus,Dash} from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledLine = styled.div`

text-align: left;
margin-bottom:3px;
*{
    display:inline-block;
}
a{
    
    margin-bottom:10px;
}
`;
const StyledChecked = styled.div`
/* зеленый background-color: rgb(88, 214, 88);*/
/* красный background-color: rgb(255, 80, 80);
    бирюзовый светлый background-color:#02dac5;
    */
    border-radius: 5px;
    width: 27px;
    height: 27px;
    padding-left: 6px;
    margin-right:10px;
    background-color: rgb(255, 80, 80);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;
    :hover{
        
        background-color: rgb(255, 110, 104);
        cursor: pointer;
        box-shadow: none;
    }
`;
const StyledUnchecked = styled.div`
    border-radius: 5px;
    width: 27px;
    height: 27px;
    padding-left: 6px;
   background-color:#02dac5;
    margin-right:10px;

    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;
    :hover{
        background-color: rgb(255, 110, 104);
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
                <StyledChecked className ="checkbox" onClick={this.check}><Dash/></StyledChecked>)
        }
        else{
            return (<StyledUnchecked className ="checkbox" onClick={this.check}><Dash/></StyledUnchecked>)
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
                    <img src={this.props.img} alt="some value"/>
                </NavLink>
            </StyledConspectbox>
        )
    
    }
}

export default Conspectbox;