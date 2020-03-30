import React from 'react';
import s from './Button.module.css';
import { NavLink } from 'react-router-dom';

const Button=(props) =>{
    return (
        <div>
            <button className={s.cnopka}> <NavLink to ="/redactor"> {props.text} </NavLink> 
            </button>
            <br></br>
        </div>
    )
}
export default Button;