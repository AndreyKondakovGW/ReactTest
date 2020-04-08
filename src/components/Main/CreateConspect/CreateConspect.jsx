import React from 'react';
import NavBar from '../NavBar/NavBar';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx'
import s from './CreateConspect.module.css';


const CreateConspect = (props) =>{
    let ReactContents = props.fotos.map(elm => <PohotoVeiwer name={elm.name} delete={props.DeleteFoto} change={props.ChangePerwie} />);
    let ImgPeriwe = null;
    if (props.imagePreviewUrl){
        ImgPeriwe = (<img src={props.imagePreviewUrl} />);
    }else{
        ImgPeriwe=(<div className={s.ImagePerwier}>ImagePerwier</div>)
    }
    return(
        <div>
            <NavBar name="Create Conspect"/>
            <div className={s.mainbox}> 
                {ReactContents}
            </div>
            <div>
                {ImgPeriwe}
            </div>
        </div>
    )
}

export default CreateConspect;