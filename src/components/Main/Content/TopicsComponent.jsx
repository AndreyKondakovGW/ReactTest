import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './Content.module.css';
import styled from 'styled-components';
const StyledGrid = styled.div` 
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 10px;
background-color: #2196F3;
padding: 10px;
.selected{
    color: white;
}
`;

const Topics=(props)=>{
    return(
        <div>
            <NavBarContainer name="Main"/>
            {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>{props.changePage(elm)}}>{elm}</span>)}
            <StyledGrid>
                 {props.ReactContents}        
            </StyledGrid>
           
        </div>
    )
}
export default Topics;