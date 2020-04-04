import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import s from './NavBar.module.css';
import {Route} from 'react-router-dom';

const NavBar = (props) =>{
    return (
        <div>
            <div className = "titel"> 
                {props.name}
            </div>
            <div className ={s.rightbutton}>
                <Route path = "/myconspects/:contentname" render ={()=><Contentbox text="открыть в редакторе" path={"/redactor/"+props.name}/>}/>
            </div>
            
        </div>
    
        
        

    )
}

export default NavBar;