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
label, input, .button, .actionbox, .dropdown{
  margin:5px;
}
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


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      
      <a
      href=""
      ref={ref}
      onClick={(e) => {
        console.log(e)
        e.preventDefault();
        onClick(e);
      }}>{children}&#x25bc;</a>

  ));
  

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
      <StyledLine>
        <ActionBox text={(this.props.CurentOption.name)?("Добавить " + (this.props.CurentOption.name)):"Добавить"} action={this.props.add}/>
        <Dropdown className="dropdown">
           <Dropdown.Toggle>Поиск...</Dropdown.Toggle>
           <Dropdown.Menu>
           <input 
             autoFocus
             id="lineinput"
             className="myinput"
             placeholder="Введите имя..."
             onChange={(e) => this.handleChange(e)}
             value={this.state.value}
             />
           {this.state.options.map(elm=><Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>{elm.username}</Dropdown.Item>)}
           </Dropdown.Menu>
      </Dropdown>
    </StyledLine>
  )
  }
}

  export default  UserFinderForm;