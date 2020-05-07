import React from 'react';

import ActionBox from './../../ActionBox/ActionBox.jsx';
import MyConspectList from './../../ConspectList/ConspectList.jsx';
import CommentsListConatiner from '../../CommentsList/CommentListContainer.jsx';
import Button from '../../Button/Button.jsx';
import UserFinderContainer from '../UsersFinder/UserFinderContainer';

import {Route} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {Link45deg ,Check, FilePlus, FileMinus,ChevronDoubleDown,FileEarmarkPlus,FileEarmarkMinus,FileEarmark,FileEarmarkCode} from 'react-bootstrap-icons';

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
            name: this.props.name
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
            this.setState({
                name: this.props.name
            })
        }
    }
    ClearForm=()=>{
        this.setState({
            name: this.props.name
        })
    }

    handleSubmit=()=> {
        console.log(this.state.name)
        if ((this.state.name!="") &&(this.props.fotos.length>0)) 
            this.props.save(this.state.name,this.props.fotos,this.props.id,this.props.conspects,this.props.OpenConspect) 
        this.ClearForm()
    }

    handleChange=(e)=>{
        let value = e.target.value;
        this.setState({
            name: value
        })
    }
    render(){
        return(
            <div>
                {console.log(this.props.name)}
                {console.log(this.props.fotos)}
                
                {(this.props.mutable)?<input 
                id="lineinput"
                       name="conspectname"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Название..."/>:
                       <div>{this.state.name}</div>}
                <ActionBox  id="lineab" text="Сохранить" icon={<Check/>} action={this.handleSubmit}/>
            </div>
        )
    }
}

class NavBar extends React.Component{
    render(){   
    return (
      <StyledNavBar>
      <Navbar expand="sm" >

      <Navbar.Brand href="#">{this.props.name}</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle" children={<ChevronDoubleDown/>}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
                <Route exact path ="/myconspects" render={()=><StyledLine>
                    <Button  text="Создать конспект" icon={<FileEarmarkPlus/>} path={"creteconspect/newconspect"}/>
                    <ActionBox text="Удалить выбранные" icon={<FileEarmarkMinus/>} action={()=>this.props.ShowAlert(this.props.Conspects)}/>
                </StyledLine>}/>

                <Route path = "/myconspects/:contentname" render ={()=><StyledLine>
                    {/*<Navbar.Brand href="#">{this.props.name}</Navbar.Brand>*/}
                    <Button text="Открыть в редакторе" path={"redactor/"+this.props.name+"/"+this.props.id}/>
                    <Button  text="Добавить фото" path={"creteconspect/"+this.props.name+"/"+this.props.id}/>
                    <CommentsListConatiner />
                    <Button  text="Доступ" path={"myconspects"}/>
                </StyledLine>}/>  

                <Route path="/content" render={()=><StyledLine>
                     {/*<Navbar.Brand href="#">{this.props.name}</Navbar.Brand>*/}
                    <Button  text="Мои конспекты" icon={<FileEarmark/>}path={"myconspects"}/>
                    <Button  text="Создать выборку" icon={<FileEarmarkCode/>}path={"topicrequest"}/>
                </StyledLine>}/>

                <Route exact path ="/creteconspect/newconspect" render={()=><StyledLine>
                     {/*<Navbar.Brand href="#">Конспект {this.props.name}</Navbar.Brand>*/}
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label for="file" >Загрузить файл {<FilePlus/>}</label>
                    <CommentsListConatiner />
                    <Button  text="Доступ" icon={<Link45deg/>} path={"myconspects"}/>
                    <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos} name="" conspects={this.props.CurentConspectfotos} mutable={true}/>
                </StyledLine>}/>
                
   
                <Route path ="/creteconspect/:conspect/:id" render={()=>
                <StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label for="file" >Загрузить файл {<FilePlus/>}</label>
                    {console.log(this.props.name)}
                    {console.log(this.props.conspectname)}
                    {(()=>{return(<ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos} name={this.props.name} conspects={this.props.CurentConspectfotos} mutable={false}/>)})()}
                </StyledLine>}/>
                


                <Route path ="/redactor" render={()=><><StyledLine>
                    {/*<Navbar.Brand href="#">Конспект {this.props.name}</Navbar.Brand>*/}
                        <Button  text="Добавить фото" icon={<FilePlus/>} path={"creteconspect/"+this.props.name+"/"+this.props.id}/>
                        <CommentsListConatiner />
                        </StyledLine>
                        {/*TODO. ЗАМЕНИТЬ НА ДРОПДАУН*/}
                        <MyConspectList>
                        <div>
                            {this.props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name+"/"+elm.id} />)}
                        </div>
                        </MyConspectList>
                        </>
                    }/>
                {/* */}



                <Route exact path="/comunity" render={()=>
                <>
                  <UserFinderContainer message="Поиск пользователя" add={this.props.add}/>
                </>
                }></Route>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
    )
}
}
export default NavBar;
//                            <StyledLine> </StyledLine></Navbar>