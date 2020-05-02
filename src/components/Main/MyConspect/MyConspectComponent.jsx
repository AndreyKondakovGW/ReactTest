import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './MyConspect.module.css'

const Conspects=(props)=>{
    return(
        <div>
                <NavBarContainer name="Конспекты"/>
                <div>
                    {props.alert()}
                    {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>props.changePage(elm)}>{elm}</span>)}
                    {props.ReactContents}
                </div>
                
        </div>
    )
}
export default Conspects;