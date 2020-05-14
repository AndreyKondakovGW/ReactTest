import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import bobr from '../../../static/images/bobr1.jpg';
import * as axios from 'axios';
import styled from 'styled-components';

const StyledLine = styled.div`
text-align: left;
margin-bottom:10px;
`;
const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;

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
a{
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
        transition-property: box-shadow;
        transition-duration: .3s;
        :hover{
            box-shadow: none;
        }
    }
    .actionbox{
        margin-top:10px;
        width:200px;
        :hover {
            background-color: rgb(255, 80, 80);
           
          }  
    }
`;
class Subscriber extends React.Component{
    componentDidMount(){
        axios.get("http://conspect-structure.eastus.cloudapp.azure.com/friend_list").then(response =>{
            this.props.setsubscribers(response.data)
       })
    }
    DeleteSubscriber(id){
        axios.delete("http://conspect-structure.eastus.cloudapp.azure.com/delete_friend/"+id)
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
                            <NavLink to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                                {elm.username}
                            </NavLink> 
                        </StyledLine>
                        <NavLink to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                            <img src={elm.av} alt="some value"/>
                        </NavLink>
                        <ActionBox text="отписаться" action={()=>this.DeleteSubscriber(elm.user_id)
                        }/> 
                    </StyledUserBox>)}
                </StyledGrid>
            </StyledInterface>
        )
    }
}

export default  Subscriber;





