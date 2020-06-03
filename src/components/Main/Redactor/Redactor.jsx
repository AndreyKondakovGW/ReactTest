import React, {useState,useCallback} from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Actionbox from './../../ActionBox/ActionBox.jsx';
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider';
import * as axios from 'axios';

import { ArrowLeft, ArrowRight,PlusSquare, StarFill} from 'react-bootstrap-icons';
import preloader from '../../../static/2.gif';
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
        transition: color .3s;
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
        padding-top:10px;
        margin:10px;
        margin-top:0px;
        overflow-y: scroll;
        /*overflow-x: scroll;*/
        height: 50vh;
        background-color: rgba(202, 162, 200,0);
        border-style: solid;
        border-width: 1px;
        border-color: #f1f1f1;
    }
    .item img{ /*img внутри .scrolbar*/
        margin:10px;
        margin-top:0px;
        height: 150px;
        width: 150px;
        object-fit: cover;
        box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, .3);
        transition:box-shadow .3s;
        :hover{
            cursor:pointer;
            box-shadow:none;
        }
    }
    
    .tagbar{
        margin:10px;
        background-color: rgba(140, 88, 167,0);
        .actionbox, #lineinput{
            margin-bottom:10px;
        }
    }
    
    .instruments{
        margin-bottom:10px;
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

const StyledInvite = styled.div`
width:100%;
height: 100%;
font-size:1em;
display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
    text-align:center;
    img{
        width: 50px;
        height: 50px;
    }
    .preloaderContainer{
        width:100%;
        height: calc(100vh - 56px);
        display:flex;
        flex-direction: column;
        flex-wrap:wrap;
        justify-content:center;
        align-items: center;
        text-align:center;
    }
`;

const StyledInterface = styled.div`
/*TODO*/
display: flex;
flex-direction: column;
width:100%;
height: 100%;

`;
const ImgCroper = (props)=> {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState({width:100,height:100})
    const [croppedArea,setcroppedArea] =useState({})
    const [aspectX,setaspectX] =useState(4)
    const [aspectY,setaspectY] =useState(3)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
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
          aspect={aspectX / aspectY}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          
        />
        </div>

        <p id="noMargin">zoom</p>   
        <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />


        <p id="noMargin">aspectX</p>   
        <Slider
            value={aspectX}
            min={1}
            max={5}
            step={1}
            onChange={(e, aspectX) => setaspectX(aspectX)}
          />
          <p id="noMargin">aspectY</p>   
        <Slider
            value={aspectY}
            min={1}
            max={5}
            step={1}
            onChange={(e, aspectY) => setaspectY(aspectY)}
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
        let value = e.target.value
        this.setState({
            ...this.state,
            tags: this.state.tags.map(elm=>(elm.id==e.target.name)?{id: elm.id,text: value.replace('(','').replace(')','').replace('.','').replace('&','').replace('|','').replace(',','')}:elm)
        })
        console.log(this.state)
    }

    handleSubmit=()=> {
        this.props.SaveTags(this.state.tags.map(elm=>elm.text).filter(elm=>elm!==""),this.props.curentfoto.index,this.props.Coordinate,this.props.siteaddres)
        this.ClearForm()
    }

    Showtags=()=>(this.state.tags.map(elm=>
    <div>
        <input 
               id="lineinput"
               type='text'
               name= {elm.id}
               value={elm.text}
               onChange={this.handleChange}
               placeholder="Введите тэг..."/>
    </div>))
    Addtagsbutton=()=>{return(this.state.maxTagAmount>this.state.tags.length?<Actionbox icon={<PlusSquare/>} text="Новый тэг" action={this.Addtag}/>:<div></div>)}
    render(){
        return (
        <div>
            <Actionbox icon={<StarFill/>} text="Привязать тэги" action={this.handleSubmit}/>
            {this.Showtags()}
            {this.Addtagsbutton()}
        </div>)
    }
}

const LoadConspectFromData= async (fotos,name,id,OpenConspect,siteaddres)=>{
        let promise = new Promise(async (resolve, reject) => {
            let f=[]
            var i=0
            while (i<fotos.data.length)
            {
                let promise = new Promise((resolve, reject) => {
                    resolve(axios.get(siteaddres+'getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' })) 
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
            if (f.length===fotos.data.length){
                resolve(f)
            }
            
        })
        promise.then(result=>{
            OpenConspect(name,id, result)  
        })  
}

class Redactor extends React.Component{ 
    componentDidMount= async ()=>{
        axios.get(this.props.siteaddres+"getconspects").then(response =>{
                this.props.setConspect(response.data)})
        if (this.props.CurentconspectID!=-1){
        axios.get(this.props.siteaddres+"getconspects").then(response =>{
                this.props.setConspect(response.data)})
        if ((this.props.match.params.id!=-1) && (this.props.CurentconspectID!==this.props.match.params.id)){
            this.props.LoadData()
            axios.get(this.props.siteaddres+'getconspectphotos/'+ this.props.match.params.id).then(response=>{
                LoadConspectFromData(response,this.props.match.params.conspectname,this.props.match.params.id,this.props.OpenConspect,this.props.siteaddres)
            }) 
        }
        }
        
    }
    

    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
        if ((!this.props.dataisLoading) && (this.props.match.params.id!=-1) && (this.props.CurentconspectID!=this.props.match.params.id)){
            this.props.LoadData()
            axios.get(this.props.siteaddres+'getconspectphotos/'+ this.props.match.params.id).then(response=>{
                LoadConspectFromData(response,this.props.match.params.conspectname,this.props.match.params.id,this.props.OpenConspect,this.props.siteaddres)
            })    
        }
        }
    }

    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    Content=()=>{return ((!this.props.dataisLoading)?
        <StyledRedactor>
            {(this.props.match.params.id!=-1)?<>
                <div className="photoviewer">
                    <ImgCroper img={this.props.Currentpotopath} width={100} height={100} SetCordinate={this.props.SetCordinate}></ImgCroper>
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
            </>
            :
            <StyledInvite>
                Чтобы начать работу, откройте конспект либо создайте новый, если список конспектов пуст.
            </StyledInvite>}
    </StyledRedactor>
    :
    <StyledInvite>
        <div className="preloaderContainer">
            <img src={preloader} alt="some image"></img>
        </div>
    </StyledInvite>)}

    
    render(){
    return(
        <StyledInterface>
                <NavBarContainer name={this.props.Conspectname}/>
                {this.Content()} 
        </StyledInterface>
    )}
}
export default Redactor;
