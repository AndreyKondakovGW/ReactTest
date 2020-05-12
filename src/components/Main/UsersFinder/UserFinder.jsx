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
          options:response.data.filter(elm=>!this.props.SubscrubersSet.has(elm.user_id))
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
        {(this.props.CurentOption.name)?
        <ActionBox  text={"Добавить " + (this.props.CurentOption.name)} action={this.props.add}/>:<></>}
      <Dropdown>
            <Dropdown.Toggle id="filelabel" >Поиск...</Dropdown.Toggle>
            <Dropdown.Menu>
            <div id="dditemcenterinput">
              <input 
                autoFocus
                id="lineinput"
                placeholder="Введите имя..."
                onChange={(e) => this.handleChange(e)}
                value={this.state.value}
              />
            </div>
              {this.state.options.map(elm=>
                <Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>
                  <div id="dditemcenter">{elm.username}</div>
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

#dditemcenter{
  background-color:   rgb(192, 175, 211);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .5);
    transition-property: box-shadow;
    transition-duration: .3s;
    transition: color 1s ease, 
                box-shadow .3s ease;
    :hover {
      background-color:rgb(119, 90, 163);
      color: #f1f1f1;
      box-shadow: none;
    }  
}

#dditemcenterinput{
  justify-content:center;
}
`;