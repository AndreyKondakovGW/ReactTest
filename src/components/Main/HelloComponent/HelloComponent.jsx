import React from 'react';
//import s from './HelloComponent.module.css'
import { Row,  Container } from 'react-bootstrap';
import styled from 'styled-components';
const StyledHellobox = styled.div`
font-size:5em;
 padding: 20% 0;
text-align:center;

`;

const HelloComponent=(props) =>{
    return (
            <StyledHellobox>Добро пожаловать в Conspect Structure</StyledHellobox>
    )
}
export default HelloComponent;
