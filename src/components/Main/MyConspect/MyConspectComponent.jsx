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

const StyledLine = styled.div`
width:100%;
text-align: center;
margin-bottom:10px;
*{
    display:inline-block;
}
`;

const StyledGrid = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 15px;
justify-items: center;
align-items: center;
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