import React, {useState,useCallback} from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Actionbox from './../../ActionBox/ActionBox.jsx';
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider';
import * as axios from 'axios';

import { ArrowLeft, ArrowRight,PlusSquare} from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledRedactor = styled.div`

    margin-top:20px ;
    width:100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-flow: row wrap;
    justify-content:center;
    align-items: flex-start;
    
.button{
        display: inline-block;
        color: black;
        background-color:#02dac5;
        margin:5px;
        width: 50px;
        height:30px;
        line-height: 30px;
        transition-property: color;
        transition-duration: 1s;
        transition-timing-function: ease;
        :hover{
            background-color:#018786;
            color: #f1f1f1;
            cursor:pointer;
        }
    }

/*================================================*/
    .photoviewer{
        margin:15px;
        margin-top:0px;
        /*display:inline-block;*/
    }
    .foto{
        position: relative;

        width: 60vw; 
        height: 60vh;

        border-style: solid;
        border-width: 1px;
        border-color: #f1f1f1;
        display:inline-block;
        flex-direction: column;
        margin:5px;
        margin-top:0px;
    }

    .foto img{ /*img внутри .foto*/
        display:block;
    }
    /*================================================*/

    .scrolbar{
       margin:15px;
       margin-top:0px;
        /*display:block;*/
        overflow-x: scroll;
        overflow-y: scroll;
        background-color: rgba(202, 162, 200,0);
        border-style: solid;
        border-width: 1px;
        border-color: #f1f1f1;
    }
    .item img{ /*img внутри .scrolbar*/
        margin-bottom: 10px;
        height: 150px;
        width: 150px;
        box-shadow: 20px -15px 10px 5px rgba(0, 0, 0, .2);
        box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, .3);
        :hover{
            cursor:pointer;
        }
    }
    
    .tagbar{
        margin:15px;
        margin-top:-15px;
        /*display:block;*/
        background-color: rgba(140, 88, 167,0);
    }
    
    .instruments{
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 800px) {
        .foto {
            width: 80vw; 
        }
        .instruments {
            flex-direction: row;
        }
      }
      @media (max-width: 418px) {
        .instruments {
            flex-direction: column;
        }
      }
`;
const ImgCroper = (props)=> {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState({width:100,height:100})
    const [croppedArea,setcroppedArea] =useState({})
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea)
        console.log(croppedAreaPixels)
        props.SetCordinate(croppedArea.x,croppedArea.x+croppedArea.width,croppedArea.y,croppedArea.y+croppedArea.height)
        setcroppedArea(croppedArea)
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

      return (
        <div className = "imgCropper">

        <div className = "foto"><Cropper
          image={props.img}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          
        />
        </div>

        <p id="noMargin">Zoom</p>   
        <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />

        <p id="noMargin">Width</p>   
        <Slider
            value={100-croppedArea.width+croppedArea.x}
            min={0}
            max={100}
            step={1}
            onChange={(e, x) => setCrop({x:x,y:crop.y})}
        />

        <p id="noMargin">Height</p>
        <Slider
            value={100-croppedArea.height+croppedArea.y}
            min={0}
            max={100}
            step={1}
            onChange={(e, y) => setCrop({x: crop.x,y:y})}
        />
        </div>
      )
  }
class ScrolbarItem  extends React.Component{ 
    ChangePhoto=()=>{
        this.props.action(this.props.id)
    }
    render(){
        return (<div className="item" >
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
        console.log(this.props.Coordinate)
        this.props.SaveTags(this.state.tags.map(elm=>elm.text).filter(elm=>elm!=""),this.props.curentfoto.index,this.props.Coordinate)
        this.ClearForm()
    }

    Showtags=()=>(this.state.tags.map(elm=><div>
        <input type='text'
               name= {elm.id}
               value={elm.text}
               onChange={this.handleChange}
               placeholder="Введите тэг..."/>
    </div>))
    Addtagsbutton=()=>{return(this.state.maxTagAmount>this.state.tags.length?<Actionbox icon={<PlusSquare/>} action={this.Addtag}/>:<div></div>)}
    render(){
        return (<div>
            <Actionbox text="Добавить тэги" id="noTopMargin" action={this.handleSubmit}/>
            {this.Showtags()}
            {this.Addtagsbutton()}
        </div>)
    }
}

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
                        console.log(img)
                        console.log(i)
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



class Redactor extends React.Component{ 
    /*
    componentDidMount= async ()=>{
        console.log(this.props.match.params.conspectname)
        console.log(this.props.match.params.id)
        if ((this.props.match.params.id!=-1) && (this.props.CurentconspectID!=this.props.match.params.id)){
            console.log("Загружаю конспект "+this.props.match.params.conspectname)
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ this.props.match.params.id).then(response=>{
                console.log(response)
                LoadConspectFromData(response,this.props.match.params.conspectname,this.props.match.params.id,this.props.OpenConspect)
            }) 
        }
    }
    

    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
        console.log(this.props.match.params.conspectname)
        console.log(this.props.match.params.id)
        if ((this.props.match.params.id!=-1) && (this.props.CurentconspectID!=this.props.match.params.id)){
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ this.props.match.params.id).then(response=>{
                console.log(response)
                LoadConspectFromData(response,this.props.match.params.conspectname,this.props.match.params.id,this.props.OpenConspect)
            })    
        }
        }
    }*/

    
    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    render(){ 
    return (
        <div>
            <NavBarContainer name={this.props.Conspectname}/>
            {/*  <div className ="wrapper">  </div> */}
            <StyledRedactor>
                <div className="photoviewer">
                    <ImgCroper img={this.props.Currentpotopath} width={100} height={100} SetCordinate={this.props.SetCordinate}></ImgCroper>{/* */}
                    <div className ="button" onClick={this.props.ChangeCurPR}> <ArrowLeft/> </div>
                    <div className ="button" onClick={this.props.ChangeCurPL}> <ArrowRight/> </div>
                </div>

                <div className="instruments"> 
                    <div className="scrolbar">
                        {this.ConspectPhotos()}
                    </div>

                    <div className ="tagbar">
                        <TagsForm Coordinate={this.props.coordinate} SaveTags={this.props.SaveTags} curentfoto={this.props.curentfoto}/>
                    </div>
                </div>

                
            </StyledRedactor>
            
        </div>
    )
}
}


export default Redactor;
