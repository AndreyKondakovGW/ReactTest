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
.flexDropdown{
  display: flex;
  flex-direction: column;
}
#dropdowntoggle{
color: black;
 background-color:#02dac5;
 font-size: 1em;
 width:180px;
 height:35px;
 line-height: 35px;
 text-align:center;
 vertical-align:middle;
    margin-top:15px;
    margin-bottom: 15px;
    margin-left:5px;
    margin-right:5px;

    padding-top:0px;
    padding-bottom: 0px;
    padding-left:0px;
    padding-right:0px;


 border-radius: 0%;
 border: 0px;

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
  width:180px;
  display:block;
  .myinput{
    font-size: 1em;
    width:164px;
    height:35px;
    line-height: 35px;
    margin-left:8px;
    margin-right:8px;
  }
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
      <Dropdown id="nav-dropdown">
        <div className="flexDropdown">
<Dropdown.Toggle id="dropdowntoggle">Поиск...</Dropdown.Toggle>
        <Dropdown.Menu id="dropdownmenu">
          <input 
            autoFocus
            className="myinput"
            placeholder="Введите имя..."
            onChange={(e) => this.handleChange(e)}
            value={this.state.value}
            />
        {this.state.options.map(elm=><Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>{elm.username}</Dropdown.Item>)}
        </Dropdown.Menu>
        </div>
        
      </Dropdown>
    
    </StyledLine>
  )
  }
}

  export default  UserFinderForm;