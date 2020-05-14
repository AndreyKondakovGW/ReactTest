import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import * as axios from 'axios';
import styled from 'styled-components';


const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
/*height: 100%;*/
    padding-bottom:20px;
`;

const StyledGrid = styled.div`
margin-top:20px;
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 15px;
justify-items: center;
align-items: center;
`;
const StyledUserBox = styled.div`
display:flex;
flex-direction: column;
text-align:center;
a.ellipsis{
  width:200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

    color: black;
    font-size: 1em;
    
    transition-property: color;
    transition-duration: .3s;
    :hover{
        color: #f1f1f1;
    }
}
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
        box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .4);
        transition: box-shadow .3s;
        :hover{
            box-shadow: none;
        }
    }
    .actionbox{
        margin-top:10px;
        width:200px;
        background-color:#c0afd3;
        :hover {
            background-color: rgb(255, 80, 80);
           
          }  
    }
`;
const StyledLine = styled.div`
text-align: left;
`;

class Subscriber extends React.Component{
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/friend_list").then(response =>{
            this.props.setsubscribers(response.data)
       })
    }
    DeleteSubscriber(id){
        axios.delete("http://127.0.0.1:5000/delete_friend/"+id)
        this.props.setsubscribers(this.props.Subscribers.filter(elm=>elm.user_id!==id))
    }
    render(){
        return (
            <StyledInterface>
                <NavBarContainer name="Мои подписки"/>
                <StyledGrid>
                    {this.props.Subscribers.map(elm=>
                    <StyledUserBox>
                        <StyledLine>
                            <NavLink className="ellipsis" to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                                {elm.username}
                            </NavLink> 
                        </StyledLine>
                        <NavLink className="noellipsis" to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                            <img  src={elm.av} alt="some value"/>
                        </NavLink>
                        <ActionBox text="Отписаться" action={()=>this.DeleteSubscriber(elm.user_id)
                        }/> 
                    </StyledUserBox>)}
                </StyledGrid>
            </StyledInterface>
        )
    }
}

export default  Subscriber;





