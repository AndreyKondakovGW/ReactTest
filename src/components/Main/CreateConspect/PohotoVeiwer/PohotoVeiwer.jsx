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
            <div className={s.NameBlock} onClick={changeP}>
                {props.name}
            </div>
            <div className={s.DeleteBlock} onClick={deleteB}>-</div>
        </div>
    )
}

export default PohotoVeiwer;