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
/*text-align: center;
*{
    display:inline-block;
}*/
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
text-align:center;

`;
const StyledNavBar = styled.div`
margin-top:56px;
background-color:rgba(255,255,255,0.5);

 .button, .actionbox, #lineinput, #filelabel{
    margin:5px;
}

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

#dditem, #dditemcenter{
    margin:5px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    text-align:center;
    align-items:center;
}
#dditemcenter{
    justify-content:center;
}
.dropdown-menu.show{
    background-color:#DCDEEA;
    animation: appear 300ms ease-in-out 1;
    @keyframes appear {
        0%{ opacity: 0;
           transform: translateY(-10px);}
      }

    position:absolute;
    overflow-y: auto;
    border-radius: 8px;
    border: 0px;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
    padding:0px;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
    text-align:center;
    .dropdown-item{
        background-color:rgba(255,255,255);
    }
  }
`;

const StyledFlexRowConspect = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
text-align:center;


.dropdown-menu.show{
  a{
    padding:0px;
  }
  .actionbox{
    background-color:   rgb(192, 175, 211);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .5);
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
  #lineinput{
      margin:0px;
  }
}
`;
const StyledFlexRowRedactor = styled.div`

display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
text-align:center;

.dropdown-menu.show{
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
        if ((this.state.name!=="") &&(this.props.fotos.length>0)) 
            this.props.save(this.state.name,this.props.fotos,this.props.id,this.props.conspects,this.props.OpenConspect,this.props.routing) 
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

class RequestSaveForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }

    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    handleSubmit=()=> {
        console.log("saved")
    }
    render(){
        return(<>
            {(this.state.value!=="")?
            <ActionBox text="Сохранить" action={this.handleSubmit}/>:<></>}
            <input type='text'
               value={this.vlaue}
               onChange={this.handleChange}
               placeholder="Введите название выборки..."/>
        </>
        )
    }
}

class NavBar extends React.Component{
    LoadPDF = (conspectname,setPdf,conspectid)=>{
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
    LoadContent=(setConspects,id,conspectname,OpenConspect)=>{
        axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
            setConspects(response.data)
        })
        if ((id!==-1)&&(this.props.id !==id )){
            this.props.LoadData()
            console.log("Загружаю конспект "+conspectname)
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ id).then(response=>{
                console.log(response)
                this.props.LoadConspectFromData(response,conspectname,id,OpenConspect)
            }) 
        }
    }
    render(){   
        const {history}=this.props
    return (
      <StyledNavBar>
      <Navbar expand="sm" >
      <Navbar.Brand href="#">{this.props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="myToggle" children={<ChevronDoubleDown/>}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
                <Route history={history} exact path = "/myconspects" render={()=><StyledLine>
                    <Button  text="Создать конспект" icon={<FileEarmarkPlus/>} path={"creteconspect/newconspect"}/>
                    <ActionBox text="Удалить выбранные" icon={<FileEarmarkMinus/>} action={()=>this.props.ShowAlert(this.props.Conspects)}/>
                </StyledLine>}/>

                <Route history={history} path = "/myconspects/:contentname/:id" render ={(props)=>
                <StyledFlexRowConspect>
                        <Route history={props} path = "/myconspects/:contentname/:id/content" render ={(props)=><>
                           <NavLink to ={"/myconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/pdf"}>
                             <ActionBox text="Создать PDF" action={()=>{}}/>
                           </NavLink>
                            <UserAccsesForm conspectid={props.match.params.id}/>
                           </>}
                        />
                        
                        <Route history={props} path = "/myconspects/:contentname/:id/pdf" render ={(props)=><>
                           <NavLink to ={"/myconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/content"}>
                             <ActionBox text="Вернуться" action={()=>{}}/>
                            </NavLink>
                            <UserAccsesForm conspectid={props.match.params.id}/>
                           </>
                        }/>
                        <Button text="Открыть в редакторе" path={"redactor/"+this.props.name+"/"+this.props.id}/>
                        <Button  text="Добавить фото" path={"creteconspect/"+this.props.name+"/"+this.props.id}/>
                        
                </StyledFlexRowConspect>
                }/>

                
                <Route history={history} path = "/subscriberconspects/:contentname/:id/content" render ={(props)=><StyledLine>
                    <NavLink to ={"/subscriberconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/pdf"}>
                        <ActionBox text="Создать PDF" action={()=>this.LoadPDF(this.props.LoadData,props.match.params.contentname,this.props.setPdf,props.match.params.id)}/>
                    </NavLink>
                    <ActionBox text="Скопировать конспект" action={()=>{axios.post('http://127.0.0.1:5000/copy_conspect/'+ props.match.params.id)}}/>
                </StyledLine>}/>

                <Route history={history} path = "/subscriberconspects/:contentname/:id/pdf" render ={(props)=><StyledLine>
                    <NavLink to ={"/subscriberconspects/"+props.match.params.contentname+"/"+props.match.params.id+"/content"}>
                        <ActionBox text="Вернуться" action={()=>this.LoadContent(this.props.setConspects,this.props.LoadData,props.match.params.id,props.match.params.conspectname,this.props.OpenConspect)}/>
                    </NavLink>
                    <ActionBox text="Скопировать конспект" action={()=>{axios.post('http://127.0.0.1:5000/copy_conspect/'+ props.match.params.id)}}/>
                </StyledLine>}/>

                <Route history={history} path="/content" render={()=><StyledLine>
                    <Button  text="Мои конспекты" icon={<FileEarmark/>}path={"myconspects"}/>
                    <Button  text="Создать выборку" icon={<FileEarmarkCode/>}path={"topicrequest"}/>
                </StyledLine>}/>

                <Route history={history} exact path ="/creteconspect/newconspect" render={()=><StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label id="filelabel" for="file" >{<FilePlus/>} Загрузить файл</label>
                    <CommentsListConatiner/>
                    <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos} name="" conspects={this.props.CurentConspectfotos} mutable={true} routing={this.Routing}/>
                </StyledLine>}/>
                
                <Route history={history} path ="/creteconspect/:conspect/:id" render={()=><>
                <StyledLine>
                    <input id="file" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    <label id="filelabel" for="file" >{<FilePlus/>} Загрузить файл</label>
                    {console.log(this.props.name)}
                    {console.log(this.props.conspectname)}
                    {(()=>{return(<ConspectSaver save={this.props.SaveConspect} name={this.props.name} fotos={this.props.fotos} conspects={this.props.CurentConspectfotos} mutable={false}/>)})()}
                </StyledLine>
                <UserAccsesForm conspectid={this.props.id}/>
                </>}/>
                
                <Route history={history} path ="/redactor" render={()=>
                    <StyledFlexRowRedactor>
                        <Button  text="Добавить фото" icon={<FilePlus/>} path={(this.props.id!==-1)?"creteconspect/"+this.props.name+"/"+this.props.id:"creteconspect/newconspect"}/>
                        {(this.props.id!==-1)?<CommentsListConatiner />:<></>}
                        <MyConspectList>
                            {this.props.Conspects.map(elm => <Button  text={elm.name} path={"redactor/"+elm.name+"/"+elm.id}/>)}
                        </MyConspectList>
                    </StyledFlexRowRedactor>
                }/>

                <Route history={history} exact path="/comunity" render={()=>
                  <UserFinderContainer message="Поиск пользователя" add={this.props.add}/>
                }></Route>

                <Route history={history} path ="/topicrequest" render={()=>
                <StyledFlexRowRedactor>
                    <NavLink to={"/get_sample_pdf"}>
                        <ActionBox text="Показать" action={this.props.WriteRequestF}/>
                    </NavLink>
                    <RequestSaveForm/>
                </StyledFlexRowRedactor>}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </StyledNavBar>
    )
}
}
export default (NavBar);

//this.LoadPDF(this.props.LoadData,props.match.params.contentname,this.props.setPdf,props.match.params.id
//this.LoadContent(this.props.setConspects,this.props.LoadData,props.match.params.id,props.match.params.conspectname,this.props.OpenConspect)