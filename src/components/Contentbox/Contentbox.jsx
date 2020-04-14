import React from 'react';
import s from './Contentbox.module.css';
import { NavLink } from 'react-router-dom';

class Contentbox extends React.Component{
    render(){ 
    return (
        <NavLink to={this.props.path}> 
                <div className={s.contentbox}>{this.props.text}</div>
        </NavLink>
    )
    }
}

export default Contentbox;