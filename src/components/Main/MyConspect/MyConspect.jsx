import React from 'react';
import Conspectbox from './ConspectboxComponent.jsx';
import NavBar from '../NavBar/NavBar';
import * as axios from 'axios';
import { waitForElementToBeRemoved } from '@testing-library/react';


class MyConspect extends React.Component{
    getConspects=()=>{
        axios.get("https://getconspect").then(response =>{
            this.props.setConspect(response.data.conspects)
        })
    }
    render(){
        return (
            <div>
                <NavBar name="Конспекты"/>
                <div>
                    {this.props.Conspects.map(elm => <Conspectbox 
                        id={elm.id} 
                        name={elm.name} 
                        checked={elm.checked} 
                        img={elm.img} 
                        path={"/myconspects/"+elm.name} 
                        checkf={this.props.checked}/> )}
                </div>
                
            </div>
        )
}
}

export default MyConspect;