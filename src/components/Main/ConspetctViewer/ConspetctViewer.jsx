import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './ConspetctViewer.module.css';
import preloader from '../../../static/2.gif';
import Button from '../../Button/Button.jsx';
import { NavLink } from 'react-router-dom';
import ActionBox from './../../ActionBox/ActionBox.jsx';
import * as axios from 'axios';


const LoadConspectFromData= async (fotos,name,id,OpenConspect)=>{
    let promise = new Promise(async (resolve, reject) => {
        let f=[]
        var i=0
        while (i<fotos.data.length)
        {
            let promise = new Promise((resolve, reject) => {
                console.log("Запрашиваю картинку по id"+fotos.data[i].id)
                resolve(axios.get('http://127.0.0.1:5000/getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' })) 
            })
            let response= await promise
            const file = new Blob(
                [response.data], 
                {type: 'image'});
            let promise2 = new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = function(event) {
                    const img = event.target.result
                    f=[...f,{name: fotos.data[i].filename,path: img,index: fotos.data[i].id,comments: ""}] 
                    i+=1
                    resolve(f)                
                }
                reader.readAsDataURL(file);
            })
            f=await promise2
        }
        if (f.length==fotos.data.length){
            console.log(f)
            resolve(f)
        }
        
    })
    promise.then(result=>{
        console.log("Полученный массив фотографий")
        console.log(result) 
        OpenConspect(name,id, result)  
    })  
}
const LoadPDF=async (LoadData,conspectname,setPdf)=>{
    LoadData()
    console.log("Отправлелен запрос на получене  конспекта "+conspectname)
    axios('http://127.0.0.1:5000/getconspectpdf/'+conspectname,
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

const LoadContent=async(setConspects,LoadData,id,conspectname,OpenConspect)=>{
    axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
        console.log(response.data)
        setConspects(response.data)
    })
    if (id!=-1){
        LoadData()
        console.log("Загружаю конспект "+conspectname)
        axios.get('http://127.0.0.1:5000/getconspectphotos/'+ id).then(response=>{
            console.log(response)
            LoadConspectFromData(response,conspectname,id,OpenConspect)
        }) 
    }
}

class Viewer extends React.Component{
    /*
    componentDidMount(){
        if (this.props.match.url.split('/')[2]!=this.props.curntpdf.name){
        if (this.props.match.url.split('/')[1]=="content"){
            this.props.LoadData()
            console.log("Отправлелен запрос на получене  пдфки тэга "+this.props.match.url.split('/')[2])
            axios('http://127.0.0.1:5000/gettagpdf/'+this.props.match.url.split('/')[2],
            {   method: 'GET',
                responseType: 'blob'}
            ).then(response =>{
                const file = new Blob(
                    [response.data], 
                    {type: 'application/pdf'});
                var fileURL = URL.createObjectURL(file);
                this.props.setPdf(fileURL,this.props.match.url.split('/')[2])
        })
        }
        if ((this.props.match.url.split('/')[1]=="myconspects")){
            if (this.props.match.url.split('/')[4]=="pdf"){
                LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf)
            }
            if (this.props.match.url.split('/')[4]=="content"){
                LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)
            }
        }
        }
    }
    */


Contentpdf=()=>{
    return ((!this.props.dataisLoading)?<>
    <iframe className={s.pdf} src={this.props.curntpdf.pdf}/>
    <NavLink to ={"/"+"myconspects/"+this.props.match.url.split('/')[2]+"/"+this.props.match.url.split('/')[3]+"/"+"content"}>
        <ActionBox text="Вернутся к просмотру фото" action={()=>LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)}/>
    </NavLink>
    </>:
<div>
    <img src={preloader} width={500} height={500}></img>
</div>)}

Content=()=>{
    return ((!this.props.dataisLoading)?
    <div>
        <div className={s.scrolbar}>
            {this.props.Photos.map(elm=><div className={s.img}><img  src={elm.path}/></div>)}
        </div>
        <NavLink to ={"/"+"myconspects/"+this.props.match.url.split('/')[2]+"/"+this.props.match.url.split('/')[3]+"/"+"pdf"}>
            <ActionBox text="Создать пдф конспекта" action={()=>LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf)}/>
        </NavLink>
    </div>:
<div>
    <img src={preloader} width={500} height={500}></img>
</div>)}
    render(){
    return (
        <div>
            <NavBar name={this.props.match.params.contentname} id={this.props.match.params.id}/>
            {console.log(this.props.match.url.split('/')[4])}
            {(this.props.match.url.split('/')[4]=="pdf")?<>
            {this.Contentpdf()}</>:<></>}
            {(this.props.match.url.split('/')[4]=="content")?<>
            {this.Content()}</>:<></>}
        </div>
    )
    }
}

export default Viewer;
/*
    LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)} path={"myconspects/"+this.props.match.url.split('/')[2]+"/"+this.props.match.url.split('/')[3]+"/"+"pdf"}/>
*/