import React from 'react';
import Button from '../../Button/Button';
import styled from 'styled-components';
const Styles = styled.div`
#search{
    font-size: 1rem;
    display: block;
    padding: 1px 2px 1px 1px;
}

`;

const SideBarMainContent=(props) =>{
    return (
        <Styles>
        
            <form action="" method="post">
				<input type="text"  name ="img_name" id="search" placeholder="Поиск..." required autofocus></input>
                <Button text='Открыть' />      
            </form>
            
            <Button  text='Создать конспект' path="creteconspect"/>
            <Button  text='Редактор' path={"redactor/"+props.CurrentConspect.name} />  
        
        </Styles>
    )
};

export default SideBarMainContent;