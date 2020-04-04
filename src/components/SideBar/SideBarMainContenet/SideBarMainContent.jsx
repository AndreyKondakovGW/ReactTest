import React from 'react';
import Button from '../../Button/Button';

const SideBarMainContent=(props) =>{
    return (
        <div>
            <form action="" method="post">
				<input type="text"  name ="img_name" id="search" placeholder="поиск" required autofocus></input>
                <Button text='открыть' />      
            </form>
            <br/>
            <Button text='Создать Конспект' path="creteconspect"/>
            <Button text='Редактор' path={"redactor/"+props.CurrentConspect.name} />  
        </div>
    )
};

export default SideBarMainContent;