import React from 'react';
import styled from 'styled-components';
const StyledInvite = styled.div`
width:100%;
height: 100%;
height: 100%;
font-size:2em;
display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
    text-align:center;
    img{
        width: 50px;
        height: 50px;
    }
`;
const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;
`;
const HelloComponent=(props) =>{
    return (
        <StyledInterface>
            <StyledInvite>Добро пожаловать в Conspect Structure.</StyledInvite>
        </StyledInterface>
            
    )
}
export default HelloComponent;
//<div>Добро пожаловать</div>
//               <div>в</div>
//               <div>Conspect Structure.</div>