import React from 'react';
import ActionBox from './../ActionBox/ActionBox.jsx'
import { FileEarmarkText} from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
const StyledLine = styled.div`
text-align: center;
*{
    display:inline-block;
}
`;
const StyledDropdown = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;

.dropdown-toggle.btn.btn-primary{
    padding:0px;
    width:180px;
    height: 35px;

    border-radius: 0%;
    border: 0px;
    background-color:#02dac5;
    color: black;
    font-size: 1em;
    outline:hidden;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;

    transition: color 1s ease, 
                box-shadow .3s ease;
    :hover {
      background-color:#018786;
      color: #f1f1f1;
      box-shadow: none;
    }  
}
.dropdown-menu{
    padding:0px;
    display:grid;
}
`;

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
        <StyledDropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle>Открыть <FileEarmarkText/></Dropdown.Toggle>
              <Dropdown.Menu>
              {this.props.children}
              </Dropdown.Menu>
            </Dropdown>
      </StyledDropdown>
    )
}
}

export default MyConspectList; 