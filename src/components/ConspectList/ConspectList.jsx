import React from 'react';
import ActionBox from './../ActionBox/ActionBox.jsx'
import { FileEarmarkText} from 'react-bootstrap-icons';

class MyConspectList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open: false
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
                <ActionBox text="Открыть конспект" icon={<FileEarmarkText/>} action={this.ChageState}/>
            </div>
            {this.Content()}
        </div>
    )
}
}

export default MyConspectList; 