import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './Redactor.module.css';
import Actionbox from './../../ActionBox/ActionBox.jsx';

class ScrolbarItem  extends React.Component{ 
    ChangePhoto=()=>{
        this.props.action(this.props.id)
    }
    render(){
        return (<div className={s.item} >
            <img src={this.props.img} onClick={this.ChangePhoto} alt="some value"/>
            </div>)
    }
}
class TagsForm  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            maxTagAmount: 5,
            tags: [{id: 0,text:""},{id: 1,text:""}]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    Addtag=()=>{
        this.setState({
            ...this.state,
            tags: [...this.state.tags,{id:this.state.tags.length,text: ""}]
        })
    }

    ClearForm=()=>{
        this.setState({
            ...this.state,
            tags: [{id: 0,text:""},{id: 1,text:""}]
        })
    }

    handleChange=(e)=>{
        let value = e.target.value;
        this.setState({
            ...this.state,
            tags: this.state.tags.map(elm=>(elm.id==e.target.name)?{id: elm.id,text: value}:elm)
        })
    }

    handleSubmit=()=> {
        console.log(this.state.tags)
        this.ClearForm()
    }

    Showtags=()=>(this.state.tags.map(elm=><div>
        <input type='text'
               name= {elm.id}
               value={elm.text}
               onChange={this.handleChange}
               placeholder="Введите тэг"/>
    </div>))
    Addtagsbutton=()=>{return(this.state.maxTagAmount>this.state.tags.length?<Actionbox text="+" action={this.Addtag}/>:<div>Вы достигли лимита тэгов</div>)}
    render(){
        return (<div>
            <Actionbox text="Добавить тэги" action={this.handleSubmit}/>
            {this.Showtags()}
            {this.Addtagsbutton()}
        </div>)
    }
}

class Redactor extends React.Component{  
    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    render(){ 
    return (
        <div>
            <NavBarContainer name={"Redactor " + this.props.Conspectname}/>
            <div className ={s.wrapper}>
                <div className={s.scrolbar}>
                    {this.ConspectPhotos()}
                </div>
                <div className={s.photoviewer}>
                    <div className ={s.button} onClick={this.props.ChangeCurPR}> [- </div>
                    <div className = {s.foto} >
                        <img src={this.props.Currentpotopath} alt="some value" id="photo"/>
                    </div>
                    <div className ={s.button} onClick={this.props.ChangeCurPL}> -] </div>
                </div>
                <div className ={s.tagbar}>
                    <TagsForm/>
                </div>
            </div>
            
        </div>
    )
}
}

export default Redactor;
