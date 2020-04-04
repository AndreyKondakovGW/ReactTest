import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './CreateConspect.module.css';

const CreateConspect = (props) =>{
    return(
        <div>
            <NavBar name="Create Conspect"/>
            <div className={s.mainbox}> something </div>
        </div>
    )
}

export default CreateConspect;