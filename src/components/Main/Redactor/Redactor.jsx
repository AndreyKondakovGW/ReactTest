import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './Redactor.module.css';
import Button from './../../Button/Button.jsx';
import Actionbox from './../../ActionBox/ActionBox.jsx';

class ScrolbarItem  extends React.Component{ 
    ChangePhoto=()=>{
        this.props.action(this.props.id)
    }
    render(){
        return (<div className={s.item} >
            {console.log(this.ChangePhoto)}
            <img src={this.props.img} onClick={this.ChangePhoto} alt="some value"/>
            </div>)
    }
}
class TagsForm  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            maxTagAmount: 5,
            tags: ["",""]
        }
    }
    Addtag=()=>{
        this.setState({
            ...this.state,
            tags: [...this.state.tags,""]
        })
    }
    Showtags=()=>(this.state.tags.map(elm=><div>
        <input type='text' value={elm}/>
    </div>))
    Addtagsbutton=()=>{return(this.state.maxTagAmount>this.state.tags.length?<Actionbox text="+" action={this.Addtag}/>:<div>Вы достигли лимита тэгов</div>)}
    render(){
        return (<div>
            <Button text="Добавить тэги"/>
            {this.Showtags()}
            {this.Addtagsbutton()}
            {console.log(this.state.tags)}
        </div>)
    }
}

class Redactor extends React.Component{ 
    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    render(){
    return (
        <div>
            <NavBar name={"Redactor "+this.props.Conspectname}/>
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
