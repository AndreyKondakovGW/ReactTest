import React, {useState,useCallback} from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import s from './Redactor.module.css';
import Actionbox from './../../ActionBox/ActionBox.jsx';
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider';

const ImgCroper = (props)=> {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState({width:100,height:100})
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => { //croppedAreaPixels.x (.y ) координаты относитеьно левого верхнего угла экрана
        console.log((crop.x+0.5*(props.width-croppedAreaPixels.width))/(props.width-croppedAreaPixels.width)*100)
        console.log((crop.y+0.5*(props.height-croppedAreaPixels.height))/(props.height-croppedAreaPixels.height)*100)
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

      return (
        <>
        <div className = {s.foto}>
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
        Zoom
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
        return (<div className={s.item} >
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

class Redactor extends React.Component{  

    ConspectPhotos=()=>{return(this.props.Photos.map(elm=><ScrolbarItem action={this.props.ChangeCurentPhoto} id={elm.index} img={elm.path}/>))}
    render(){ 
    return (
        <div>
            <NavBarContainer name={"Redactor "+this.props.Conspectname}/>
            <div className ={s.wrapper}>
                <div className={s.scrolbar}>
                    {this.ConspectPhotos()}
                </div>
                <div className={s.photoviewer}>
                    <div className ={s.button} onClick={this.props.ChangeCurPR}> [- </div>
                        <ImgCroper img={this.props.Currentpotopath} width={500} height={500}></ImgCroper>
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
