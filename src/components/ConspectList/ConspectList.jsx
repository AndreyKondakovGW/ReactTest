import React from 'react';
import Button from './../Button/Button.jsx';
import s from './ConspectList.module.css';

const MyConspectList = (props) =>{

    let ReactContents = props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name} /> )

    return (
        <div className={s.Conspectbox}>
            {ReactContents}
        </div>
    )
}

export default MyConspectList; 