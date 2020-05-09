import React from 'react';
import { FileEarmarkText} from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

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
        <Dropdown>
          <Dropdown.Toggle id="filelabel">Открыть<FileEarmarkText/></Dropdown.Toggle>
          <Dropdown.Menu>
          {this.props.children}
          </Dropdown.Menu>
        </Dropdown>
    )
}
}

export default MyConspectList; 