import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import bobr from '../../../static/images/bobr1.jpg';
import * as axios from 'axios';

class SubscriberAdder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "",
            options: []
        }
    }

    ClearForm=()=>{
        this.setState({
            value: ""
        })
    }

    handleChange=(e)=>{
        let value = e.target.value;
        if (value!=""){
            axios.get('http://127.0.0.1:5000/search_users/'+value).then(response=>{
                console.log(response)
                this.setState({
                    value: value,
                    options: response.data
                })
            })
            this.props.SearchUsers(value);
        }
        this.setState({
            value: value
        })
    }

    render(){   
        return(
            <div><input 
                id="lineinput"
                       name="conspectname"
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder="Название..."/>
                {this.state.options.map(elm=><ActionBox text={elm.username} action={()=>this.props.add(elm.username,elm.id)}/>)}
            </div>
        )
    }
}

class Subscriber extends React.Component{

    render(){
        return (
            <div>

                <NavBarContainer name="Мои поверенные"/>
                {this.props.Subscribers.map(elm=><><NavLink to={"/comunity/"+elm.name+"/conspect_and_tags"}>
                    <div>{elm.name}</div>
                    <img src={bobr} alt="some value"/>
                    </NavLink></>)}
                <div>
                    <SubscriberAdder SearchUsers={this.props.SearchUsers} add={this.props.add}/>
                </div>
            </div>
        )
    }
}

export default  Subscriber;