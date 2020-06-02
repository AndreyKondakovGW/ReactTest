import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import PohotoVeiwer from './PohotoVeiwer/PohotoVeiwer.jsx';
import * as axios from 'axios';
import styled from 'styled-components';
import preloader from '../../../static/2.gif';

const StyledMainbox = styled.div`
    margin-top:20px ;
    width:100%;
    /*height: 100%;*/
    padding-bottom:20px;
    
    display:flex;
    flex-direction: column;
    flex-wrap:nowrap;
    justify-content:center;
    align-items: flex-start;
    
    .mygrid{
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    }
`;
const StyledImagePerwier = styled.div`
width:100%;

margin-bottom:20px;
    display:flex;
    flex-direction: column;
    flex-wrap:nowrap;
    justify-content:center;
    align-items: center;

    img{
        /*это работает и слава богу DO NOT TOUCH PLEASE*/
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 50vh;
        box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, .3);
    }
`;
const StyledInvite = styled.div`
width:100%;
height:100%;

    font-size:1em;
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
    align-content: center;
    text-align:center;
    img{
        width: 50px;
        height: 50px;
    }
`;
const StyledInterface = styled.div`

width:100%;

`;
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
            let promise2 = new Promise((resolve) => {
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

class CreateConspect extends React.Component{
    
    componentDidMount= async ()=>{
        if (!(this.props.match.params.id)){
            this.props.OpenEmptyConspect()
        }
        if ((this.props.match.params.id) && (this.props.conspectid!==this.props.match.params.id)){
            this.props.LoadData()
            axios.get(this.props.siteaddres+'getconspectphotos/'+ this.props.match.params.id).then(response=>{
                LoadConspectFromData(response,this.props.match.params.conspect,this.props.match.params.id,this.props.OpenConspect,this.props.siteaddres)
            })
        }
    }
    
    ReactContents = ()=>{console.log(this.props.fotos)
                        return(this.props.fotos.map(elm => 
                        <PohotoVeiwer name={elm.name} 
                                    delete={this.props.DeleteFoto} 
                                    change={this.props.ChangePerwie} 
                                    path={elm.path}/>))}

    ImgPeriwe = ()=> {return((this.props.imagePreviewUrl)?
                    (<StyledImagePerwier>
                        <img src={this.props.imagePreviewUrl} alt="some value" />
                    </StyledImagePerwier>)
                    :
                    (<StyledInvite>Пожалуйта, загрузите изображение, чтобы начать работу.</StyledInvite>))}
    render(){
    return( 
        <StyledInterface>
            {(!this.props.dataisLoading)?<>
            <NavBarContainer name={this.props.Conspectname}/>
            <StyledMainbox>
                {this.ImgPeriwe()}
                <div className="mygrid">{this.ReactContents()}</div>
            </StyledMainbox></>:<StyledInvite><img src={preloader} alt="some image"/></StyledInvite>}
        </StyledInterface>
        
    )
}
}
export default CreateConspect;