import React from 'react';
import NavBar from '../NavBar/NavBar';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx'
import s from './CreateConspect.module.css';

class CreateConspect extends React.Component{  
    ReactContents = ()=>{return(this.props.fotos.map(elm => <PohotoVeiwer name={elm.name} delete={this.props.DeleteFoto} change={this.props.ChangePerwie} />))}
    ImgPeriwe = ()=> {return((this.props.imagePreviewUrl)?(<img src={this.props.imagePreviewUrl} alt="some value" />):(<div className={s.ImagePerwier}>ImagePerwier</div>))}
    render(){  
    return( 
        <div>
            {console.log(this.props.imagePreviewUrl)}
            {console.log(this.props.fotos)}
            <NavBar name="Create Conspect"/>
            <div className={s.mainbox}> 
                {this.ReactContents()}
                {this.ImgPeriwe()}
            </div>
        </div>
    )
}
}
export default CreateConspect;