import React from 'react';
import { NavLink } from 'react-router-dom';

const Button=(props) =>{
    return (
        <div>
            <NavLink to ={"/"+props.path}>{props.text}         {props.icon}</NavLink> 
        </div>
    )
}
export default Button;