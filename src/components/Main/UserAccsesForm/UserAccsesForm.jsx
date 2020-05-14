import React from 'react';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import Dropdown from 'react-bootstrap/Dropdown'
import * as axios from 'axios';
class UserAccsesForm extends React.Component{
    constructor(props){
      super(props)
      this.state={
        options: [],
        selecteoptions:[],
        value: "",
        checkinoption: new Set(),
        checkallsubscribers: false,
        checkeveryone:false
      }
      this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount=()=>{
      axios.get('http://conspect-structure.eastus.cloudapp.azure.com/get_users_with_access/'+this.props.conspectid).then(response=>{
        console.log(response.data)
        this.setState({
          ...this.state,
          checkeveryone: response.data.find(elm=>elm.user_id===-1).username==="True",
          selecteoptions: response.data.filter(elm=>elm.user_id!==-1).map(function(elm){return({...elm,cheked: true})})
        })
        response.data.forEach(elm=>this.state.checkinoption.add(elm.user_id))
        console.log(this.state)
      })
    }

    CheckedById=(id)=>{
      console.log(this.state.selecteoptions)
      console.log(this.state.options)
      console.log(id)
      if ((this.state.selecteoptions.find(elm=>elm.user_id===id))&&(this.state.selecteoptions.find(elm=>elm.user_id===id).cheked)){
        this.state.checkinoption.delete(id)
        this.state.selecteoptions=this.state.selecteoptions.filter(elm=>elm.user_id!==id)
        console.log(this.state)
      }
      else{
        this.state.checkinoption.add(id)
        this.state.selecteoptions.push({...this.state.options.find(elm=>elm.user_id===id),cheked:true})
        console.log(this.state.options.find(elm=>elm.user_id===id))
      }
      this.setState({
          ...this.state,
          options: this.state.options.map(elm=>(elm.user_id===id)?{...elm,cheked:!elm.cheked}:elm)
      })
      console.log(this.state.selecteoptions)
      console.log(this.state.options)
    }
    handleChange=(e)=>{
      let value = e.target.value;
      if (value!==""){
        axios.get('http://conspect-structure.eastus.cloudapp.azure.com/search_users/'+value).then(response=>{
          this.setState({
            ...this.state,
            value: value,
            options: response.data.filter(option=>(option.user_id!==-1)&&(!this.state.checkinoption.has(option.user_id))).map(function(elm){return({...elm,cheked: false})})
          })
        })
        
      }
      else{
      this.setState({
        ...this.state,
        value: value,
        options: []
      })
    }
    console.log(this.state)
    }

    HandleSubmit=()=>{
      if (this.state.checkallsubscribers){
        axios.post('http://conspect-structure.eastus.cloudapp.azure.com/share_conspect_to_friends/'+this.props.conspectid+'/viewer')
      }
      axios.get('http://conspect-structure.eastus.cloudapp.azure.com/get_users_with_access/'+this.props.conspectid).then(response=>{
        let usersold=new Set(response.data.map(elm=>elm.user_id))
        let usersnew=new Set(this.state.selecteoptions.map(elm=>elm.user_id))
        usersold.forEach(elm=>{
          if (!usersnew.has(elm)){
            axios.delete('http://conspect-structure.eastus.cloudapp.azure.com/remove_user_access/'+elm+'/'+this.props.conspectid)
          }
        })
        usersnew.forEach(elm=>{
          if (!usersold.has(elm)){
            axios.post('http://conspect-structure.eastus.cloudapp.azure.com/share_conspect/'+this.props.conspectid+'/'+elm+'/viewer')
          }
        })
      })

    }
  
    render(){
      return (
          (!this.state.checkeveryone)?<>
          <ActionBox text="Открыть для всех" action={()=>{this.setState({...this.state, checkeveryone:!this.state.checkeveryone}); axios.put('conspect-structure.eastus.cloudapp.azure.com/share_conspect_to_all/'+this.props.conspectid)}}/>
          <Dropdown>
              <Dropdown.Toggle id="filelabel">Доступ</Dropdown.Toggle>
              <Dropdown.Menu>
                <div id="dditem">
                  <input type="checkbox" id="Все поверенные" checked={this.state.checkallsubscribers} onChange={() => {this.setState({...this.state, checkallsubscribers:!this.state.checkallsubscribers})}} />
                  <label id ="textlabel" for="Все поверенные">Все поверенные</label>
                </div>
                
              {this.state.selecteoptions.map(elm=>
                <div id="dditem">
                    <input type="checkbox" name={elm.username} id={elm.username} checked={elm.cheked} onChange={() => this.CheckedById(elm.user_id)}/>
                    <label id="textlabel" for={elm.username}>{elm.username}</label>
                </div>
              )}

              <div id="dditemcenter">
                <input 
                autoFocus
                id="lineinput"
                className="myinput"
                placeholder="Введите имя..."
                onChange={(e) => this.handleChange(e)}
                value={this.state.value}/>
              </div>
              
              {this.state.options.filter(option=>!this.state.checkinoption.has(option.user_id)).map(elm=>
                <div id="dditem">
                    <input type="checkbox" name={elm.username} id={elm.username} checked={elm.cheked} onChange={() => this.CheckedById(elm.user_id)}/>
                    <label  id="textlabel" for={elm.username}>{elm.username}</label>
                </div>

              )}

              <Dropdown.Item>
                <ActionBox text="Добавить выбранных" action={this.HandleSubmit}/>
              </Dropdown.Item>

              </Dropdown.Menu>
            
          </Dropdown>
          </>:<ActionBox text="Закрыть для всех" action={()=>{this.setState({...this.state, checkeveryone:!this.state.checkeveryone}); axios.put('conspect-structure.eastus.cloudapp.azure.com/set_conspect_private/'+this.props.conspectid)}}/>
      )
    }
}
  
export default UserAccsesForm;
