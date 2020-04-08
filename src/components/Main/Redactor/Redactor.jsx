import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './Redactor.module.css';



const Redactor = (props)=>{
    return (
        <div>
            <NavBar name={"Redactor "+props.Conspectname}/>
            <div className ={s.fotobox}>
                <div className ={s.button} onClick={props.ChangeCurPR}> [- </div>
                <div className = {s.foto} >
                    <img src={require("./../../../"+props.Conspectpath+"/"+props.Currentpotopath)} alt="some value" id="photo"/>
                </div>
                
                <div className ={s.button} onClick={props.ChangeCurPL}> -] </div>
            </div>
            
        </div>
    )
}

export default Redactor;
