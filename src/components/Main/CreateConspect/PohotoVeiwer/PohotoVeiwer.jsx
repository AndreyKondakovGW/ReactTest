import React from 'react';
import {Dash} from 'react-bootstrap-icons';
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
    border-radius: 20%;
    width: 20px;
    height: 20px;
    padding-left: 2px;
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

const PohotoVeiwer=(props) =>{
    const deleteB=()=>{
        props.delete(props.name)
    }

    const changeP=()=>{
        props.change(props.name)
    }

    return(
        <StyledLine>
            <StyledDeleteBlock onClick={deleteB}><Dash/></StyledDeleteBlock>
            <img  src={props.path} onClick={changeP}/>
        </StyledLine>
    )
}

export default PohotoVeiwer;