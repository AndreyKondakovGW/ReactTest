import React from 'react';
import s from './Content.module.css';
import styled from 'styled-components';
const StyledTags = styled.div`
    margin-top:20px ;
    width:100%;
    
    /*height: 100%;*/
    padding-bottom:20px;
    display: flex;
    flex-direction:column;

    justify-content:center;
    align-items: flex-start;
`;
const StyledGrid = styled.div` 
margin:0px;
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
grid-gap: 25px;
justify-items: center;
align-items: center;
`;
const StyledLine = styled.div`
width:100%;
margin-bottom:10px;
text-align: center;
*{
    display:inline-block;
}
`;
const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;

`;
const Topics=(props)=>{
    return(
        <StyledInterface>
            <StyledTags>
                <StyledLine>
                 {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>{props.changePage(elm)}}>{elm}</span>)}
                </StyledLine>
                <StyledGrid>{props.ReactContents}</StyledGrid>
            </StyledTags>
        </StyledInterface>
    )
}
export default Topics;