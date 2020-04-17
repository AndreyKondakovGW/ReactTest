import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import ActionBox from './../../ActionBox/ActionBox.jsx'

import {Route} from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const StyledNavBar = styled.div`
margin-top:56px;
background-color:rgba(255,255,255,0.5);


#basic-navbar-nav {
  
    transition-delay: 0s;
    transition-duration: .4s;
    transition-property: height;
    transition-timing-function: ease-in-out;
    }
  
  .navbar-brand, .navbar-nav .nav-link {
    color: rgb(0,0,0);
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color:#02dac5;
    }
  }

  #myToggle{
    outline:none;
  }
`;

class NavBar extends React.Component{
    delete=()=>{
        console.log('delete')
        this.props.delete()
    }
    render(){   
    return (
        <StyledNavBar>
            <Navbar expand="sm" >
      <Navbar.Brand href="#">{this.props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
        <Route path="/content" render={()=><Nav.Item>
                    <Contentbox  text="Мои конспекты" path="/myconspects"/>
                    </Nav.Item>}/>

                <Route path="/content" render={()=><Nav.Item>
                    <Contentbox  text="Составить выборку по темам" path={"/myconspects"}/>
                    </Nav.Item>}/>

                <Route path = "/myconspects/:contentname" render ={()=><Nav.Item>
                    <Contentbox text="открыть в редакторе" path={"/redactor/"+this.props.name}/>
                    </Nav.Item>}/>      
                <Route exact path ="/myconspects" render={()=><Nav.Item>
                    <Contentbox  text="добавить конспект" path={"/creteconspect"}/>
                    </Nav.Item>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><Nav.Item>
                    <Contentbox  text="добавить фото в конспект" path={"/creteconspect/"+this.props.name}/>
                    </Nav.Item>}/>
            
            
                <Route exact path ="/myconspects" render={()=><Nav.Item>
                    <ActionBox text="удалить выбранные" action={this.delete}/>
                    </Nav.Item> }/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><Nav.Item>
                    <Contentbox  text="удалить" path={"/myconspects"}/>
                    </Nav.Item>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><Nav.Item>
                    <Contentbox  text="Добавит комментарий" path={"/myconspects"}/>
                    </Nav.Item>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><Nav.Item>
                    <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                    </Nav.Item>}/>

                <Route path ="/redactor" render={()=><div>
                    <Nav.Item>
                        <Contentbox  text="Добавит фото" path={"/myconspects"}/>
                        </Nav.Item>
                        <Nav.Item>
                        <Contentbox  text="удалить фото" path={"/myconspects"}/>
                        </Nav.Item>
                        <Nav.Item>
                        <Contentbox  text="Добавить Комментарий" path={"/myconspects"}/>
                        </Nav.Item>
                        </div>
                }/>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
        
    )
}
}

export default NavBar;