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

class UserAccsesForm extends React.Component{
    constructor(props){
      super(props)
      this.state={
        options: [],
        selecteoptions:[],
        value: "",
        checkinoption: new Set()
      }
      this.handleChange=this.handleChange.bind(this)
    }
    CheckedById=(id)=>{
      if ((this.state.selecteoptions.find(elm=>elm.user_id===id))&&(this.state.selecteoptions.find(elm=>elm.user_id===id).cheked)){
        this.state.checkinoption.delete(id)
        this.state.selecteoptions=this.state.selecteoptions.filter(elm=>elm.user_id!=id)}
      else{
        this.state.checkinoption.add(id)
        this.state.selecteoptions=[...this.state.selecteoptions,{...this.state.options.find(elm=>elm.user_id===id),cheked:true}]}
      this.setState({
          ...this.state,
          options: this.state.options.map(elm=>(elm.user_id===id)?{...elm,cheked:!elm.cheked}:elm)
      })
      console.log(this.state)
    }

    handleChange=(e)=>{
      let value = e.target.value;
      if (value!=""){
        axios.get('http://127.0.0.1:5000/search_users/'+value).then(response=>{
          console.log(response.data)
          this.setState({
            ...this.state,
            value: value,
            options: response.data.filter(option=>!this.state.checkinoption.has(option.user_id)).map(function(elm){return({...elm,cheked: false})})
            
          })
          console.log(this.state)
        })
        
      }
      this.setState({
        ...this.state,
        value: value,
        options: []
      })
    }

    HandleSubmit=()=>{
      console.log(this.state.selecteoptions)
      console.log(this.props.conspectid)
      this.state.selecteoptions.forEach(elm => {
        axios.post('http://127.0.0.1:5000/share_conspect/'+this.props.conspectid+"/"+elm.user_id+"/viewer")
      });
    }
  
    render(){
      return (
          <Dropdown id="nav-dropdown">
            <div className="flexDropdown">
            <StyledLine>
              <Dropdown.Toggle id="dropdowntoggle">Доступ</Dropdown.Toggle>
            </StyledLine>
              <Dropdown.Menu id="dropdownmenu">
              <Dropdown.Item>
                <div>
                  Выберете того кому разрешить доступ
                </div>
              </Dropdown.Item>
                <input type="checkbox" name="Все поверенные" id="Все поверенные" checked={false} onChange={() => {}} />
                <label for="Все поверенные">Все поверенные</label>
                {this.state.selecteoptions.map(elm=><div>
                      <input type="checkbox" name={elm.username} id={elm.username} checked={elm.cheked} onChange={() => this.CheckedById(elm.user_id)}/>
                      <label for={elm.username}>{elm.username}</label></div>
                )}
                <div>
                <input 
                  autoFocus
                  className="myinput"
                  placeholder="Введите имя..."
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.value}
                />
                </div>
                {this.state.options.filter(option=>!this.state.checkinoption.has(option.user_id)).map(elm=>
                  <div>
                      <input type="checkbox" name={elm.username} id={elm.username} checked={elm.cheked} onChange={() => this.CheckedById(elm.user_id)}/>
                      <label for={elm.username}>{elm.username}</label>
                  </div>
                )}
                <Dropdown.Item>
                  <ActionBox text="Добавить выбранных" action={this.HandleSubmit}/>
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </Dropdown>
      )
    }
}
  
export default UserAccsesForm;