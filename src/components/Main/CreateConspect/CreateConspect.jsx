import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx'
import s from './CreateConspect.module.css';
import * as axios from 'axios';

class CreateConspect extends React.Component{
    /*
    componentDidMount(){
        console.log(this.props.match.params.conspect)
        console.log(this.props.match.params.id)
        if (this.props.match.params.contentname!=""){
            console.log("Пытаюсь загрузить данные конспект и ид " + this.props.match.params.id)
            axios('http://127.0.0.1:5000/getconspectphotos/'+ this.props.match.params.id).then(response =>{
                console.log(response.data)
                let data=response.data
            })
            
        }
    } 
    */ 
    ReactContents = ()=>{return(this.props.fotos.map(elm => <PohotoVeiwer name={elm.name} delete={this.props.DeleteFoto} change={this.props.ChangePerwie} path={elm.path}/>))}
    ImgPeriwe = ()=> {return((this.props.imagePreviewUrl)?(<img className={s.ImagePerwier} src={this.props.imagePreviewUrl} alt="some value" />):(<div className={s.ImagePerwier}>ImagePerwier</div>))}
    render(){  
    return( 
        <div>
            <NavBarContainer name="Create Conspect"/>
            <div className={s.mainbox}> 
                <div className={s.wrapper}>
                    {this.ReactContents()}
                </div>
                {this.ImgPeriwe()}
            </div>
            
        </div>
    )
}
}
export default CreateConspect;