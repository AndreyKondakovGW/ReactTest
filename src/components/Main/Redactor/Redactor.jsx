import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './Redactor.module.css';



const Redactor = (props)=>{
    
    let ChangeCurPR =() =>{
        props.dispath({type: "ChangeCurPR"})
    }
    
    let ChangeCurPL =()=>{
        props.dispath({type: "ChangeCurPL"})
    }

    return (
        <div>
            <NavBar name={"Redactor "+props.state.LogicData.CurrentConspect.name}/>
            <div className ={s.fotobox}>
                <div className ={s.button} onClick={ChangeCurPR}> [- </div>
                <div className = {s.foto} >
                    <img src={require("./../../../"+props.state.LogicData.CurrentConspect.path+"/"+props.state.LogicData.CurrentConspect.data.curentfoto.path)} alt="some value" id="photo"/>
                </div>
                
                <div className ={s.button} onClick={ChangeCurPL}> -] </div>
            </div>
            
        </div>
    )
}

export default Redactor;
