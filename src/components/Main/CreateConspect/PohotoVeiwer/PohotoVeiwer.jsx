import React from 'react';
import s from './PohotoVeiwer.module.css';

const PohotoVeiwer=(props) =>{
    const deleteB=()=>{
        props.delete(props.name)
    }

    const changeP=()=>{
        props.change(props.name)
    }

    return(
        <div>
            {props.name}
            <div className={s.DeleteBlock} onClick={deleteB}>-</div>
            <img  src={props.path} className={s.imgbox} onClick={changeP}/>
        </div>
    )
}

export default PohotoVeiwer;