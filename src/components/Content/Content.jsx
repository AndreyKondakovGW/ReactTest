import React from 'react';
import Contentbox from '../Contentbox/Contentbox';
import s from './Content.module.css';


const Content=(props) =>{

    let ReactContents = props.Topics.map(elm => <Contentbox text={elm.name} path={elm.path} /> )

    return (
        <div>
            <div className = "titel">Ttitle</div>
                <div className={s.wrapper}>
                    {ReactContents}                  
                </div>
        </div>
    )
}
export default Content;