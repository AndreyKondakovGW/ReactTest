import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import s from './NavBar.module.css';
import {Route} from 'react-router-dom';

const NavBar = (props) =>{
    return (
        <div>
            <div className ={s.nav}>
                {props.name}
            </div>
            <div className ={s.nav}>
                <Route path = "/myconspects/:contentname" render ={()=><Contentbox text="открыть в редакторе" path={"/redactor/"+props.name}/>}/>
            </div>
            <div className ={s.nav}>
                <Route path ="/myconspects" render={()=><Contentbox  text="добавить конспект" path={"/creteconspect"}/>}/>
                </div>
            <div className ={s.nav}>
                <Route exact path ="/myconspects" render={()=><Contentbox text="удалить выбранные" path={"/creteconspect"}/>}/>
                </div>
            <div className ={s.nav}>
                <Route path ="/myconspects/:contentname" render={()=><Contentbox  text="удалить" path={"/myconspects"}/>}/>
            </div>
            
        </div>      
    )
}

export default NavBar;