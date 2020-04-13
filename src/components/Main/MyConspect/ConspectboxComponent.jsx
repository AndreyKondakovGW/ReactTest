import React from 'react';
import s from './Conspectbox.module.css';
import { NavLink } from 'react-router-dom';


class Conspectbox extends React.Component{
    check=()=>{
        console.log('click')
        this.props.checkf(this.props.id)
    }
    checkbox=()=>{
        if (this.props.checked){
            return (<div className={s.checked} onClick={this.check}>+
                </div>)
        }
        else{
            return (<div className={s.unchecked} onClick={this.check}>-
            </div>)
        }
    }
    render(){
        return (
            <div className={s.body} >
                {this.checkbox()}
                {this.name}
                <NavLink to={this.props.path}>
                    <img src={this.props.img} alt="some value"/>
                </NavLink>
            </div>
        )
    
    }
}

export default Conspectbox;