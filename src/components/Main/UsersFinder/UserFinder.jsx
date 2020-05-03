import React,{useState} from 'react';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import Dropdown from 'react-bootstrap/Dropdown'
import * as axios from 'axios';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        console.log(e)
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
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
    console.log(this.props.CurentOption)
    return (
    <>
    <div>{this.props.CurentOption.name}</div>
    <ActionBox text="Добавить пользователя" action={this.props.add}/>
    <Dropdown>
      <Dropdown.Toggle>
        Выберете пользователя
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <input
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Введите имя пользователя"
            onChange={(e) => this.handleChange(e)}
            value={this.state.value}
          />
            {this.state.options.map(elm=><Dropdown.Item onClick={()=>this.props.setoption(elm.username,elm.user_id)}>{elm.username}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
  }
}

  export default  UserFinderForm;