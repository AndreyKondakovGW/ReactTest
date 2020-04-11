import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';
import NavBar from '../NavBar/NavBar';
import * as axios from 'axios';

const MyConspect = (props) =>{
    //axios.get("https://getconspect").then(response =>{
    //   props.setConspect(response.data.conspects)
    //})
    let ReactContents = props.Conspects.map(elm => <Contentbox text={elm.name} path={"/myconspects/"+elm.name} /> )

    return (

        <div>
            <NavBar name="My Conspects"/>
            <div>
                {ReactContents}
            </div>
            
        </div>
    )

}

export default MyConspect;