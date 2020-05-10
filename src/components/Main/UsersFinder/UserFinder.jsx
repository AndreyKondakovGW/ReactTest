import React,{useState} from 'react';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import Dropdown from 'react-bootstrap/Dropdown'
import * as axios from 'axios';
import styled from 'styled-components';

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
    <StyledFlexRow>
        <ActionBox  text={(this.props.CurentOption.name)?("Добавить " + (this.props.CurentOption.name)):"Добавить"} action={this.props.add}/>
      <Dropdown>
            <Dropdown.Toggle id="filelabel" >Поиск...</Dropdown.Toggle>
            <Dropdown.Menu>
              <input 
                autoFocus
                id="lineinput"
                placeholder="Введите имя..."
                onChange={(e) => this.handleChange(e)}
                value={this.state.value}
              />
              {this.state.options.map(elm=>
                <Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>
                  {elm.username}
                </Dropdown.Item>)}
            </Dropdown.Menu>
      </Dropdown>
      </StyledFlexRow>
    )
  }
}

export default  UserFinderForm;
const StyledFlexRow = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
text-align:center;
#filelabel, .actionbox{
  margin:5px;
}
.dropdown-menu.show{
  padding:5px;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  align-content:center;
  text-align:center;
}
`;