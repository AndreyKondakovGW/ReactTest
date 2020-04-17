import React from 'react';
import Contentbox from './../../Contentbox/Contentbox.jsx';
import ActionBox from './../../ActionBox/ActionBox.jsx'
import s from './NavBar.module.css';
import {Route} from 'react-router-dom';
import MyConspectList from './../../ConspectList/ConspectList.jsx';
import Button from '../../Button/Button.jsx';
import CommentsList from '../../CommentsList/CommentsList.jsx'

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
        <div className ={s.body}>
            <div className ={s.nav}>
                {this.props.name}
            </div>
                <Route path="/content" render={()=><div className ={s.nav}>
                    <Contentbox  text="Мои конспекты" path="/myconspects"/>
                </div>}/>

                <Route path="/content" render={()=><div className ={s.nav}>
                    <Contentbox  text="Составить выборку по темам" path={"/myconspects"}/>
                </div>}/>

                <Route path = "/myconspects/:contentname" render ={()=><div className ={s.nav}>
                    <Contentbox text="открыть в редакторе" path={"/redactor/"+this.props.name}/>
                    </div>}/>      
                <Route exact path ="/myconspects" render={()=><div className ={s.nav}>
                    <Contentbox  text="добавить конспект" path={"/creteconspect"}/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="добавить фото в конспект" path={"/creteconspect/"+this.props.name}/>
                    </div>}/>
            
            
                <Route exact path ="/myconspects" render={()=><div className ={s.nav}>
                    <ActionBox text="удалить выбранные" action={this.delete}/>
                    </div> }/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="удалить" path={"/myconspects"}/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <CommentsList/>
                    </div>}/>
            
            
                <Route path ="/myconspects/:contentname" render={()=><div className ={s.nav}>
                    <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                    </div>}/>

                <Route path ="/redactor" render={()=><div>
                    <div className ={s.nav}>
                        <Contentbox  text="Добавит фото в конспект" path={"/creteconspect/"+this.props.name}/>
                    </div>
                    <div className ={s.nav}>
                        <Contentbox  text="удалить фото" path={"/myconspects"}/>
                    </div>
                    <div className ={s.nav}>
                        <CommentsList/>
                    </div>
                    <div className ={s.nav}>
                        <MyConspectList>
                        <div>
                            {this.props.Conspects.map(elm => <Button text={elm.name} path={"redactor/"+elm.name} />)}
                        </div>
                        </MyConspectList>
                    </div>
                </div>
                }/>

                <Route path ="/creteconspect" render={()=><div>
                    <div className ={s.nav}>
                        Добавит фото
                        <input className="fileInput" type="file" onChange={(e)=>this.props.AddFoto(e)}/>
                    </div>
                    <div className ={s.nav}>
                        <CommentsList/>
                    </div>
                    <div className ={s.nav}>
                        <Contentbox  text="Настроить доступ" path={"/myconspects"}/>
                    </div>
                    <div className ={s.nav}>
                        <ConspectSaver save={this.props.SaveConspect} fotos={this.props.fotos}/>
                    </div>
                </div>}/>
        </div>      
    )
}
}

export default NavBar;