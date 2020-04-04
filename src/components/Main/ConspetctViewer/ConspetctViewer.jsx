import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './ConspetctViewer.module.css';


const Viewer = (props)=>{
    return (
        <div>
            {console.log(props)}
            <NavBar name={props.CurrentConspect.name}/>
            <iframe className={s.pdf} src={require("./../../../"+props.CurrentConspect.path+"/"+props.CurrentConspect.name+".pdf")} titel={props.CurrentConspect.name}></iframe>
        </div>
    )
}

export default Viewer;