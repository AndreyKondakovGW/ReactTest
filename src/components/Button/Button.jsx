import React from 'react';
import s from './Button.module.css';
import { NavLink } from 'react-router-dom';

const Button=(props) =>{
    return (
        <div>
            <NavLink to ={"/"+props.path}> {props.text} </NavLink> 
            {/*<button className={s.cnopka}> 
            
            
    </button>*/}
            <br></br>
        </div>
    )
}
export default Button;