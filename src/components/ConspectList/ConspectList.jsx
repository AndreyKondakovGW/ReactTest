import React from 'react';
import Button from './../Button/Button.jsx';
import s from './ConspectList.module.css';
import ActionBox from './../ActionBox/ActionBox.jsx'
    
class MyConspectList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open: true
        }
    }
    ChageState=()=>{
        this.setState({
            open: !this.state.open
        })
    }

    Content=()=>{
        return (this.state.open ? (this.props.children) : <div></div>)
    }
    render(){
    return (
        <div>
            <div  onClick={ this.ChageState }>
                <ActionBox text="Открыть конспекты в редакторе" action={this.ChageState}/>
            </div>
            {this.Content()}
        </div>
    )
}
}

export default MyConspectList; 