import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import bobr from '../../../static/images/bobr1.jpg';
import UserFinderContainer from '../UsersFinder/UserFinderContainer';
import * as axios from 'axios';
class Subscriber extends React.Component{
    componentDidMount(){
        console.log("Отправлелен запрос на получение конспектов")
        axios.get("http://127.0.0.1:5000/friend_list").then(response =>{
            console.log(response.data)
            this.props.setsubscribers(response.data)
       })
    }
    render(){
        return (
            <div>
                <NavBarContainer name="Мои поверенные"/>
                {this.props.Subscribers.map(elm=><><NavLink to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                    <div>{elm.username}</div>
                    <img src={bobr} alt="some value"/>
                    </NavLink> </>)}
                {/*
                 <UserFinderContainer add={this.props.add}/>
                */}
                   
               
            </div>
        )
    }
}

export default  Subscriber;
