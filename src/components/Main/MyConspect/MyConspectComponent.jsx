import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import s from './MyConspect.module.css'

const Conspects=(props)=>{
    return(
        <div>
                <NavBar name="Конспекты" delete={props.deletechecked}/>
                <div>
                    {props.pages.map(elm=><span className={props.CurrentPage ===elm && s.selected} onClick={()=>props.changePage(elm)}>{elm}</span>)}
                    {props.ReactContents}
                </div>
                
        </div>
    )
}
export default Conspects;