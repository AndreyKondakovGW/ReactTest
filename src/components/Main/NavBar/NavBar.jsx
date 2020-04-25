import React from 'react';

import ActionBox from './../../ActionBox/ActionBox.jsx'
import MyConspectList from './../../ConspectList/ConspectList.jsx';
import CommentsListConatiner from '../../CommentsList/CommentListContainer.jsx';
import Button from '../../Button/Button.jsx';

import {Route} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {Link45deg ,Check, FilePlus, FileMinus,ChevronDoubleDown} from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledLine = styled.div`
text-align: center;
*{
    display:inline-block;
}
`;
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
            <div>
                <input 
                id="lineinput"
                
                       name="conspectname"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Название..."/>
                <ActionBox  id="lineab" text="Сохранить" icon={<Check/>} action={this.handleSubmit}/>
            </div>
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle" children={<ChevronDoubleDown/>}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
                <Route path="/content" render={()=><StyledLine>
                    <Button  text="Мои конспекты" path={"myconspects"}/>
                    <Button  text="Составить выборку" path={"topicrequest"}/></StyledLine>}/>

                <Route exact path ="/myconspects" render={()=>
                    <Button  text="Добавить конспект" path={"creteconspect"}/>
                    }/>
            
                <Route path ="/myconspects/:contentname" render={()=>
                    <Button  text="Добавить фото" path={"creteconspect/"+this.props.name+"/"+this.props.id}/>
                    }/>
            
                <Route exact path ="/myconspects" render={()=>
                    <ActionBox text="Удалить выбранные" action={this.delete}/>
                }/>
                
                <Route path = "/myconspects/:contentname" render ={()=><StyledLine>
                    <Button text="Открыть в редакторе" path={"redactor/"+this.props.name+"/"+this.props.id}/>
                    <Button  text="Добавить фото" path={"creteconspect/"+this.props.name}/>
                    <Button  text="Удалить" path={"myconspects"}/>
                    <CommentsListConatiner />
                    <Button  text="Доступ" path={"myconspects"}/>
                    </StyledLine>
                }/>  
   
                <Route path ="/redactor" render={()=><StyledLine>
                        <Button  text="Добавить фото" icon={<FilePlus/>} path={"creteconspect/"+this.props.name}/>
                        <Button  text="Удалить фото" icon={<FileMinus/>} path={"myconspects"}/>
                        <CommentsListConatiner />
                        {/*TODO. ЗАМЕНИТЬ НА ДРОПДАУН*/}
                        <MyConspectList>
                        <div>
                            {this.props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name} />)}
                        </div>
                        </MyConspectList>
                        </StyledLine>
                }/>

                <Route path ="/creteconspect" render={()=><StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label for="file" >Загрузить файл {<FilePlus/>}</label>
                    <CommentsListConatiner />
                    <Button  text="Доступ" icon={<Link45deg/>} path={"myconspects"}/>
                    <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos}/>
                    </StyledLine>
                }/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
    )
}
}
export default NavBar;
