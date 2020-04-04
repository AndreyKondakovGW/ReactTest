import React from 'react';
import s from './Contentbox.module.css';
import { NavLink } from 'react-router-dom';


const Contentbox=(props) =>{
    return (
        <NavLink to={props.path}> 
                {console.log(props.path)}
                <div className={s.contentbox}>{props.text}</div>  
        </NavLink>
    )
}

export default Contentbox;