import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import s from './Content.module.css';

const Topics=(props)=>{
    return(
        <div>
            <NavBar name="Main"/>
            {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>{props.changePage(elm)}}>{elm}</span>)}
            <div className={s.wrapper}>           
                {props.ReactContents}                
            </div>
        </div>
    )
}
export default Topics;