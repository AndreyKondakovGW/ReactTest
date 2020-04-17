import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx'
import s from './CreateConspect.module.css';

class CreateConspect extends React.Component{  
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