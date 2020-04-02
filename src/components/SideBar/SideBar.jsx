import React from 'react';
import Button from '../Button/Button';
import s from './SideBar.module.css';
import logo from '../../logo.png'


const SideBar=() =>{
    return (
        <div className={s.sidebar}>
            <div>
                <img src={logo} alt="some value"/>
            </div>
            <form action="" method="post">
				    <input type="text"  name ="img_name" id="search" placeholder="поиск" required autofocus></input>
                <Button text='открыть' />      
            </form>
            <Button text='Редактор' path="redactor" /> 
            <Button text='удалить страницу' path="" /> 
            <Button text='выйти' path="conent" />  
        </div>
    )
}

export default SideBar;