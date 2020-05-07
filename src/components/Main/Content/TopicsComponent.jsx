import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './Content.module.css';
import styled from 'styled-components';

const StyledTags = styled.div`
    margin-top:20px ;
    width:100%;
    height: 100%;
    
    display: flex;
    flex-direction:column;

    justify-content:center;
    align-items: flex-start;
`;


const StyledGrid = styled.div` 
margin:0px;
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
grid-gap: 15px;
justify-items: center;
align-items: center;
`;
const StyledLine = styled.div`
width:100%;
text-align: center;
*{
    display:inline-block;
}
`;
const Topics=(props)=>{
    return(
        <div>
            {/*<NavBarContainer name="Main"/>*/}
        <StyledTags>
            <StyledLine>
             {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>{props.changePage(elm)}}>{elm}</span>)}
            </StyledLine>
            <StyledGrid>{props.ReactContents}</StyledGrid>
        </StyledTags>
        </div>
    )
}
export default Topics;