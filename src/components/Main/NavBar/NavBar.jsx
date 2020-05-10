import React from 'react';

import ActionBox from './../../ActionBox/ActionBox.jsx';
import MyConspectList from './../../ConspectList/ConspectList.jsx';
import CommentsListConatiner from '../../CommentsList/CommentListContainer.jsx';
import Button from '../../Button/Button.jsx';
import UserFinderContainer from '../UsersFinder/UserFinderContainer';
import UserAccsesForm from '../UserAccsesForm/UserAccsesForm.jsx';
import * as axios from 'axios';
import {Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {Link45deg ,Check, FilePlus, FileMinus,ChevronDoubleDown,FileEarmarkPlus,FileEarmarkMinus,FileEarmark,FileEarmarkCode, CodeSlash} from 'react-bootstrap-icons';

import styled from 'styled-components';
const StyledLine = styled.div`
text-align: center;
*{
    display:inline-block;
}
#filelabel,  .button, .actionbox, .dropdown{
    margin:5px;
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
                {(this.props.mutable)?
                <input id="lineinput"
                       name="conspectname"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Название..."
                />
                :
                <div>{this.state.name}</div>}
                <ActionBox  text="Сохранить" icon={<Check/>} action={this.handleSubmit}/>
            </div>
        )
    }
}
class NavBar extends React.Component{
    LoadPDF = (LoadData,conspectname,setPdf,conspectid)=>{
        this.props.LoadData()
        console.log("Отправлелен запрос на получене  конспекта "+conspectname)
        axios('http://127.0.0.1:5000/getconspectpdf/'+conspectid,
        {   
            method: 'GET',
            responseType: 'blob'}
        ).then(response =>{
            const file = new Blob(
                [response.data], 
                {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
        setPdf(fileURL,conspectname)
        })
    }
    LoadContent=(setConspects,LoadData,id,conspectname,OpenConspect)=>{
        axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
            console.log(response.data)
            setConspects(response.data)
        })
        if ((id!=-1)&&(this.props.id !=id )){
            this.props.LoadData()
            console.log("Загружаю конспект "+conspectname)
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ id).then(response=>{
                console.log(response)
                this.props.LoadConspectFromData(response,conspectname,id,OpenConspect)
            }) 
        }
    }
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

                <Route path = "/myconspects/:contentname/:id" render ={()=>
                <>
                    <StyledLine>
                        {/*<Navbar.Brand href="#">{this.props.name}</Navbar.Brand>*/}
                        {/*action={()=>LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf)}*/}
                        <Button text="Открыть в редакторе" path={"redactor/"+this.props.name+"/"+this.props.id}/>
                        <Button  text="Добавить фото" path={"creteconspect/"+this.props.name+"/"+this.props.id}/>
                    </StyledLine>
                <UserAccsesForm conspectid={this.props.id}/>
                </>}/>

                <Route path = "/myconspects/:contentname/:id/content" render ={(props)=><StyledLine>
                    <NavLink to ={"/"+"myconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/"+"pdf"}>
                        <ActionBox text="Создать PDF" action={()=>this.LoadPDF(this.props.LoadData,props.match.params.contentname,this.props.setPdf,props.match.params.id)}/>
                    </NavLink>
                </StyledLine>}/>
                <Route path = "/myconspects/:contentname/:id/pdf" render ={(props)=><StyledLine>
                    <NavLink to ={"/"+"myconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/"+"content"}>
                        <ActionBox text="Вернуться" action={()=>this.LoadContent(this.props.setConspects,this.props.LoadData,props.match.params.id,props.match.params.conspectname,this.props.OpenConspect)}/>
                    </NavLink>
                </StyledLine>}/>

                <Route path="/content" render={()=><StyledLine>
                    <Button  text="Мои конспекты" icon={<FileEarmark/>}path={"myconspects"}/>
                    <Button  text="Создать выборку" icon={<FileEarmarkCode/>}path={"topicrequest"}/>
                </StyledLine>}/>

                <Route exact path ="/creteconspect/newconspect" render={()=><StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label id="filelabel" for="file" >Загрузить файл {<FilePlus/>}</label>
                    <CommentsListConatiner/>
                    <Button  text="Доступ" icon={<Link45deg/>} path={"myconspects"}/>
                    <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos} name="" conspects={this.props.CurentConspectfotos} mutable={true}/>
                </StyledLine>}/>
                
   
                <Route path ="/creteconspect/:conspect/:id" render={()=>
                <StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label id="filelabel" for="file" >Загрузить файл {<FilePlus/>}</label>
                    {console.log(this.props.name)}
                    {console.log(this.props.conspectname)}
                    {(()=>{return(<ConspectSaver save={this.props.SaveConspect} name={this.props.name} fotos={this.props.fotos} conspects={this.props.CurentConspectfotos} mutable={false}/>)})()}
                </StyledLine>}/>


                <Route path ="/redactor" render={()=><>
                    <StyledFlexRow>
                        <Button  text="Добавить фото" icon={<FilePlus/>} path={(this.props.id!=-1)?"creteconspect/"+this.props.name+"/"+this.props.id:"creteconspect/newconspect"}/>
                        {(this.props.id!=-1)?<CommentsListConatiner />:<></>}
                        <MyConspectList >
                            {this.props.Conspects.map(elm => <Button  text={elm.name} path={"redactor/"+elm.name+"/"+elm.id} />)}
                        </MyConspectList>
                    </StyledFlexRow>
                </>}/>


                <Route exact path="/comunity" render={()=>
                  <UserFinderContainer message="Поиск пользователя" add={this.props.add}/>
                }></Route>

                <Route path ="/topicrequest" render={()=>
                <StyledLine>
                    <ActionBox text="Показать" action={this.props.WriteRequestF}/>
                    <ActionBox text="Сохранить" action={this.props.WriteRequestF}/>
                </StyledLine>}/>
                
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
    )
}
}
export default NavBar;
//                                            <CommentsListConatiner />
const StyledFlexRow = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
text-align:center;
#filelabel, .actionbox, .button{
  margin:5px;
}
.dropdown-menu.show{
  padding:0px;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  align-content:center;
  text-align:center;
  a{
    background-color:   rgb(192, 175, 211);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    transition-property: box-shadow;
    transition-duration: .3s;
    transition: color 1s ease, 
                box-shadow .3s ease;
    :hover {
      background-color:rgb(119, 90, 163);
      color: #f1f1f1;
      box-shadow: none;
    }  
  }
}
`;