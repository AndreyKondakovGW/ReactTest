import React from 'react';
import Button from '../../Button/Button';

const SideBarMainContent=() =>{
    return (
        <div>
            <form action="" method="post">
				<input type="text"  name ="img_name" id="search" placeholder="поиск" required autofocus></input>
                <Button text='открыть' />      
            </form>
            <Button text='Редактор' path="redactor" /> 
            <Button text='удалить страницу' path="" /> 
        </div>
    )
};

export default SideBarMainContent;