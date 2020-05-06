import React from 'react';
import s from './MyConspect.module.css'
import styled from 'styled-components';
const StyledConspects = styled.div`
    margin-top:20px ;
    width:100%;
    height: 100%;
    
    display: flex;
    flex-direction:column;

    justify-content:center;
    align-items: flex-start;
`;

const StyledGrid = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;

    justify-content:flex-start;
    align-items: flex-start;

    @media (max-width: 500px) {
        justify-content:center;
        align-items: center;
      }
`;

const StyledLine = styled.div`
width:100%;
text-align: center;
*{
    display:inline-block;
}
`;

const Conspects=(props)=>{
    return(
        <div>
                <StyledConspects>
                    {(props.alert)?props.alert():<></>}
                    <StyledLine>
                    {props.pages.map(elm=>
                        <div className={props.CurrentPage ===elm && s.selected} onClick={()=>props.changePage(elm)}>
                            {elm}
                        </div>)}
                    </StyledLine>
                   <StyledGrid>{props.ReactContents}</StyledGrid>
                </StyledConspects>
                
        </div>
    )
}
export default Conspects;