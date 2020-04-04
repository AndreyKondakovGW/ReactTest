import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';
import s from './Content.module.css';
import NavBar from '../NavBar/NavBar';


const Content=(props) =>{

    let ReactContents = props.Topics.map(elm => <Contentbox text={elm.name} path={"/content/"+elm.path} /> )

    return (
        <div>
            <NavBar name="Main"/>
            <div className={s.wrapper}>
                {ReactContents}
                <Contentbox text="My Conspects" path="myconspects" />                 
            </div>
        </div>
    )
}
export default Content;