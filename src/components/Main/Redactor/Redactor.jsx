import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './Redactor.module.css';

const Redactor = (props)=>{
    return (
        <div>
            <NavBar name={"Redactor "+props.CurrentConspect.name}/>
            <div className ={s.fotobox}>
                <div className ={s.button} onClick={props.ChangeCurPL}> [- </div>
                <div className = {s.foto} >
                    <img src={require("./../../../"+props.CurrentConspect.path+"/"+props.CurrentConspect.data.curentfoto.path)} alt="some value" id="photo"/>
                </div>
                
                <div className ={s.button} onClick={props.ChangeCurPL}> -] </div>
            </div>
            
        </div>
    )
}

export default Redactor;
