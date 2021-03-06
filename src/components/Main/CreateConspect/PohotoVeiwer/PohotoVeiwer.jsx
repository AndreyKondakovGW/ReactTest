import React from 'react';


import {X} from 'react-bootstrap-icons';
import styled from 'styled-components';

const StyledLine = styled.div`
display:flex;
display-direction:row;

img{
    
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .4);
    transition-property: box-shadow;
    transition-duration: .3s;
    :hover{
        cursor: pointer;
        box-shadow: none;
    }
}
`;

const StyledDeleteBlock = styled.div`
border-radius: 5px;
    width: 20px;
    height: 20px;
    
    background-color:#c0afd3;
    margin-right:10px;
    
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition: box-shadow .3s,
                color .3s;
    :hover{
        background-color: rgb(255, 80, 80);
        color: #f1f1f1;
        cursor: pointer;
        box-shadow: none;
    }
    svg{
        margin-bottom:5px;
    }
    
    
`;

const PohotoVeiwer=(props) =>{
    const deleteB=()=>{
        props.delete(props.name)
    }
    const changeP=()=>{
        props.change(props.name)
    }
    return(
        <StyledLine>
            <StyledDeleteBlock onClick={deleteB}><X /></StyledDeleteBlock>
            <img  src={props.path} onClick={changeP} alt="PhotoViewr"/>
        </StyledLine>
    )
}

export default PohotoVeiwer;