import React, {useState,useCallback} from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Actionbox from './../../ActionBox/ActionBox.jsx';
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider';
import * as axios from 'axios';

import styled from 'styled-components';
const StyledRedactor = styled.div`
.wrapper{
    margin-top:20px ;
    width:100%;
    height: 100vh;
      display:  inline-grid;
      grid-template-areas:
      "scrolbar photo tags";
      grid-column-gap: 10px;
      grid-template-columns: 200px 1fr 200px;
      text-align: center;
      vertical-align: middle;
    }
    
    
    .scrolbar{
        position: absolute;
        grid-area: scrolbar;
        overflow-x: scroll;
        overflow-y: scroll;
        background-color: rgb(202, 162, 200);
    
    }
    .photoviewer{
        grid-area: photo;
    
    }
    .tagbar{
        grid-area: tags;
        background-color: rgb(140, 88, 167);
    
    }
    
    .foto{
        position: relative;
        width: 500px;
        height: 500px;
        display: inline-block;
        border-style: solid;
        border-width: 1px;
        border-color: #f1f1f1;
    
    }
    .foto img{
        display:block;
        width: 100%;
    }
    .button{
        display: inline-block;
        background-color: #fddc64;
        width: 50px;
    
    }
    .button:hover{
        background-color:#8f84be;
        color: rgb(255, 255, 255);
    }
    .item img{
        margin-bottom: 10px;
        height: 150px;
        width: 150px;
        border-style: solid;
        border-width: 1px;
        border-color: #f1f1f1;
    }
`;
const ImgCroper = (props)=> {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState({width:100,height:100})
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => { //croppedAreaPixels.x (.y ) координаты относитеьно левого верхнего угла экрана
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

      return (
        <>
        <div className = "foto">
        <Cropper
          image={props.img}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          
        />
        </div>
        <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />
               Width
        <Slider
            value={(crop.x+0.5*(props.width-croppedAreaPixels.width))/(props.width-croppedAreaPixels.width)*100}
            min={0}
            max={100}
            step={1}
            onChange={(e, x) => setCrop({x: x/100*(props.width-croppedAreaPixels.width)-0.5*(props.width-croppedAreaPixels.width),y:crop.y})}
        />
        Heigth
        <Slider
            value={(crop.y+0.5*(props.height-croppedAreaPixels.height))/(props.height-croppedAreaPixels.height)*100}
            min={0}
            max={100}
            step={1}
            onChange={(e, y) => setCrop({x: crop.x,y:y/100*(props.height-croppedAreaPixels.height)-0.5*(props.height-croppedAreaPixels.height)})}
        />
        </>
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

/*
const  LoadPhotoByID= async (id)=>{
    let reader = new FileReader();
    let response= await axios.get('http://127.0.0.1:5000/getphotobyid/'+ id,{ responseType: 'blob' } )
    
}
const LoadConspectFromData= async (conspectname,id)=>{
    let fotos= await axios.get('http://127.0.0.1:5000/getconspectphotos/'+ id)
    let imges=await fotos.data.map(async function(elm)
    {
        let response= await axios.get('http://127.0.0.1:5000/getphotobyid/'+ id,{ responseType: 'blob' } )
        const file = new Blob(
            [response.data], 
            {type: 'image'});
        console.log(file)
        return ({name: elm.filename,path: file,index: elm.id,comments: ""})
    })
    console.log("Полученный массив фотографий")
    console.log(imges)
    return (imges)     
}
*/


class Redactor extends React.Component{ 
    /*
    componentDidMount(){
        console.log(this.props.match.params.conspectname)
        console.log(this.props.match.params.id)
        if (this.props.match.params.contentname!=""){
                LoadConspectFromData(this.props.match.params.conspectname,this.props.match.params.id).then(result=>
                    this.props.OpenConspect(this.props.match.params.conspectname,this.props.match.params.id,result))    
        }
    }
    */

    
    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    render(){ 
        console.log(this.props.Photos)
    return (
        <StyledRedactor>
            <NavBarContainer name={"Redactor " + this.props.Conspectname}/>
            <div className ="wrapper">
                <div className="scrolbar">
                    {this.ConspectPhotos()}
                </div>

                <div className="photoviewer">
                    <div className ="button" onClick={this.props.ChangeCurPR}> [- </div>
                        <ImgCroper img={this.props.Currentpotopath} width={500} height={500}></ImgCroper>
                    <div className ="button" onClick={this.props.ChangeCurPL}> -] </div>
                </div>
                
                <div className ="tagbar">
                    <TagsForm/>
                </div>
            </div>
            
        </StyledRedactor>
    )
}
}

export default Redactor;
