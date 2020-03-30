import React from 'react';
import Button from '../Button/Button';
import s from './SideBar.module.css';


const SideBar=() =>{
    return (
        <div className={s.sidebar}>
            <form action="" method="post">
                <label for="search" class="sr-only">поиск</label>
				    <input type="text"  name ="img_name" id="search" placeholder="поиск" required autofocus></input>
                <Button text='открыть' />      
            </form>
            <Button text='Редактор' path="/redactor" /> 
            <Button text='удалить страницу' path="" /> 
            <Button text='тема 1' path="" /> 
            <Button text='тема 2' path=""/> 
            <Button text='тема 3' path=""/> 
            <Button text='тема 4' path=""/> 
            <Button text='тема 5' path=""/> 
            <Button text='тема 6' path=""/> 
            <Button text='тема 7' path=""/> 
            <Button text='тема 8' path=""/>
            <Button text='выйти' path="/conent"/>  
        </div>
    )
}

export default SideBar;