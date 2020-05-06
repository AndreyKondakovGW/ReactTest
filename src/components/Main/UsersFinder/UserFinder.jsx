import React,{useState} from 'react';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import Dropdown from 'react-bootstrap/Dropdown'
import * as axios from 'axios';
import styled from 'styled-components';
const StyledLine = styled.div`
text-align: center;
*{
    display:inline-block;
}
`;
const StyledDropdown = styled.div`
#dropdown{
    margin-left:5px;
    margin-right:5px;
    border-radius: 0%;
    border: 0px;
    background-color:#02dac5;
    color: black;
    font-size: 1em;

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
#dropdownmenu{
  margin-left:5px;
    margin-right:5px;
}
`;

  class UserFinderForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options: [],
            value: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange=(e)=>{
      console.log(this)
      let value = e.target.value;
      if (value!=""){
          axios.get('http://127.0.0.1:5000/search_users/'+value).then(response=>{
             this.setState({
                value: value,
                options:response.data
             })
          })
      }
      this.setState({
        ...this.state,
        value: value,
     })
    }


  render(){
    return (
      <>
      <ActionBox text={(this.props.CurentOption.name)?("Добавить " + (this.props.CurentOption.name)):"Выберете пользователя->"} action={this.props.add}/>

      <StyledDropdown>
      <Dropdown id="nav-dropdown">
        <Dropdown.Toggle id="dropdown"><StyledLine>Поиск пользователя...</StyledLine></Dropdown.Toggle>
        <Dropdown.Menu id="dropdownmenu">
          {this.props.message}
          <input
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Введите имя..."
            onChange={(e) => this.handleChange(e)}
            value={this.state.value}/>
        {this.state.options.map(elm=><Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>{elm.username}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </StyledDropdown>
    </>
  )
  }
}

  export default  UserFinderForm;