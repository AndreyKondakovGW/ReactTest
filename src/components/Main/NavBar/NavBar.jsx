import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import ActionBox from './../../ActionBox/ActionBox.jsx'

import {Route} from 'react-router-dom';
import MyConspectList from './../../ConspectList/ConspectList.jsx';
import Button from '../../Button/Button.jsx';
import CommentsList from '../../CommentsList/CommentsList.jsx'

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

class ConspectSaver extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    ClearForm=()=>{
        this.setState({
            name: ""
        })
    }

    handleSubmit=()=> {
        console.log(this.state.name)
        if ((this.state.name!="") &&(this.props.fotos.length>0)) 
            this.props.save(this.state.name,this.props.fotos) 
        this.ClearForm()
    }

    handleChange=(e)=>{
        let value = e.target.value;
        this.setState({
            name: value
        })
    }
    render(){   
        return (
            <>
                <input type="text"
                       name="conspectname"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Введите назание"/>
                <ActionBox  text="Сохранить" action={this.handleSubmit}/>
            </>
        )
    }
}
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
                    <CommentsList/>
                    </Nav.Item>}/>
                     
                <Route path ="/myconspects/:contentname" render={()=><Nav.Item>
                    <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                    </Nav.Item>}/>

                <Route path ="/redactor" render={()=><div>
                    <Nav.Item>
                        <Contentbox  text="Добавит фото в конспект" path={"/creteconspect/"+this.props.name}/>
                    </Nav.Item>
                    <Nav.Item>
                        <Contentbox  text="удалить фото" path={"/myconspects"}/>
                    </Nav.Item>
                    <Nav.Item>
                        <CommentsList/>
                    </Nav.Item>
                    <Nav.Item>
                        <MyConspectList>
                        <div>
                            {this.props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name} />)}
                        </div>
                        </MyConspectList>
                    </Nav.Item>
                </div>
                }/>

                <Route path ="/creteconspect" render={()=><div>
                    <Nav.Item>
                        Добавит фото
                        <input className="fileInput" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    </Nav.Item>
                    <Nav.Item>
                        <CommentsList/>
                        </Nav.Item>
                        <Nav.Item>
                        <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                        </Nav.Item>
                        <Nav.Item>
                        <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos}/>
                        </Nav.Item>
                </div>}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
    )
}
}

export default NavBar;