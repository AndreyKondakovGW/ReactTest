import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './Content.module.css';

const Topics=(props)=>{
    return(
        <div>
            <NavBarContainer name="Main"/>
            {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>{props.changePage(elm)}}>{elm}</span>)}
            <div className={s.wrapper}>           
                {props.ReactContents}                
            </div>
        </div>
    )
}
export default Topics;