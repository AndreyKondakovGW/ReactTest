import React from 'react';
import s from './ActionBox.module.css';

class ActionBox extends React.Component{
    onclik =()=>{
        this.props.action()
    }
    render(){
        return(
        <div className={s.box} onClick={this.onclik}>
            {this.props.text}
        </div>
    )
    }
}

export default ActionBox; 