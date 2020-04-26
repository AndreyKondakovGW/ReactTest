import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx'
import s from './CreateConspect.module.css';
import * as axios from 'axios';

const LoadConspectFromData= async (fotos,name,id,OpenConspect)=>{
    let promise = new Promise(async (resolve, reject) => {
        let f=[]
        var i=0
        while (i<fotos.data.length)
        {
            let promise = new Promise((resolve, reject) => {
                resolve(axios.get('http://127.0.0.1:5000/getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' }))      
            })
            let response=await promise
            const file = new Blob(
                [response.data], 
                {type: 'image'});
            let reader = new FileReader();
            reader.onload = function(event) {
                const img = event.target.result
                f=[...f,{name: fotos.data[i].filename,path: img,index: fotos.data[i].id,comments: ""}]
                i+=1
            }     
            reader.readAsDataURL(file);
        }
        if (i==fotos.data.length){
            resolve(f)
        }
        
    })
    promise.then(result=>{
        console.log("Полученный массив фотографий")
        console.log(result) 
        OpenConspect(name,id, result)  
    })  
} 

class CreateConspect extends React.Component{
    /*
    componentDidMount= async ()=>{
        console.log(this.props.match.params.conspect)
        console.log(this.props.match.params.id)
        if (this.props.match.params.contentname!=""){
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ this.props.match.params.id).then(response=>{
                console.log(response)
                LoadConspectFromData(response,this.props.match.params.conspect,this.props.match.params.id,this.props.OpenConspect)
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