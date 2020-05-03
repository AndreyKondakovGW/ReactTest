import React from 'react';
import s from './HelloComponent.module.css'

const HelloComponent=(props) =>{
    return (
        <div className={s.hellobox}>
            <h1>Добро пожаловать в ConspectSturcters</h1>
        </div>
    )
}
export default HelloComponent;