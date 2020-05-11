import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';
import ActionBox from '../../ActionBox/ActionBox.jsx';
import bobr from '../../../static/images/bobr1.jpg';
import UserFinderContainer from '../UsersFinder/UserFinderContainer';
import * as axios from 'axios';
import styled from 'styled-components';
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
            <StyledInterface>
                <NavBarContainer name="Мои поверенные"/>

                <StyledGrid>

                    {this.props.Subscribers.map(elm=>
                    <StyledUserBox>

                        <StyledLine>
                            <NavLink to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                                {elm.username}
                            </NavLink> 
                        </StyledLine>

                        <NavLink to={"/comunity/"+elm.username+"/"+elm.user_id+"/conspect_and_tags"}>
                            <img src={bobr} alt="some value"/>
                        </NavLink> 

                    </StyledUserBox>)}

                </StyledGrid>
                {/*
                 <UserFinderContainer add={this.props.add}/>
                */}
            </StyledInterface>
        )
    }
}

export default  Subscriber;


const StyledUserBox = styled.div`
display:inline-block;
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
`;
const StyledLine = styled.div`
text-align: left;
margin-bottom:10px;
*{
    display:inline-block;
}
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