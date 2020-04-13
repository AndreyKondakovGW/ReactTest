import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';
import s from './Content.module.css';
import NavBar from '../NavBar/NavBar';
import * as axios from 'axios';



class Topics extends React.Component{
    getTopics=()=>{
        axios.get("https://getconspect").then(response =>{
            this.props.setConspect(response.data.conspects)
        })
    }
    ReactContents = this.props.Topics.map(elm => <Contentbox text={elm.name} path={"/content/"+elm.path} /> )
    render(){  
        return(   
        <div>
            <NavBar name="Main"/>
            <div className={s.wrapper}>
                {this.ReactContents}                
            </div>
        </div>
        )
    }
}
export default Topics;