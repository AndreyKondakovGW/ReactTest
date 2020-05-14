import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import preloader from '../../../static/2.gif';
import * as axios from 'axios';
import styled from 'styled-components';

import helppdf from '../../../static/pdf/simplePDF.pdf';

const StyledInvite = styled.div`
width:100%;
height: 100%;
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
`;
const LoadConspectFromData= async (fotos,name,id,OpenConspect)=>{
    let promise = new Promise(async (resolve) => {
        let f=[]
        var i=0
        while (i<fotos.data.length)
        {
            let promise = new Promise((resolve) => {
                resolve(axios.get('http://127.0.0.1:5000/getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' })) 
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
            console.log(f)
            resolve(f)
        }
        
    })
    promise.then(result=>{
        OpenConspect(name,id, result)  
    })  
}
const LoadPDF=async (LoadData,conspectname,setPdf,conspectid)=>{
    LoadData()
    axios('http://127.0.0.1:5000/getconspectpdf/'+conspectid,
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
        setConspects(response.data)
    })
    if (id!==-1){
        LoadData()
        axios.get('http://127.0.0.1:5000/getconspectphotos/'+ id).then(response=>{
            LoadConspectFromData(response,conspectname,id,OpenConspect)
        }) 
    }
}
class Viewer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            option:"content",
            suboption:"content"
        }
    }
    componentDidMount(){
        if (this.props.match.url.split('/')[1]==="content"){
            this.props.LoadData()
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
        if (this.props.match.url.split('/')[1]==="sample_pdf"){
            this.props.LoadData()
            axios('http://127.0.0.1:5000/get_sample_pdf/'+this.props.topicrequest,
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
        if ((this.props.match.url.split('/')[1]==="myconspects") || (this.props.match.url.split('/')[1]==="subscriberconspects")){
            if (this.props.match.url.split('/')[4]==="pdf"){
                LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf,this.props.match.params.id)
            }
            if (this.props.match.url.split('/')[4]==="content"){
                LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props){
            if (((this.state.option!=this.props.match.url.split('/')[4]) && (this.props.match.url.split('/')[1]==="myconspects"))){
                if (this.props.match.url.split('/')[4]==="pdf"){
                    this.setState({
                        ...this.state,
                        option: this.props.match.url.split('/')[4]
                    })
                    LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf,this.props.match.params.id)
                }
                if (this.props.match.url.split('/')[4]==="content"){
                    this.setState({
                        ...this.state,
                        option: this.props.match.url.split('/')[4]
                    })
                    LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)
                }
            }
            if ((this.state.suboption!=this.props.match.url.split('/')[4]) && (this.props.match.url.split('/')[1]==="subscriberconspects")){
                if (this.props.match.url.split('/')[4]==="pdf"){
                    this.setState({
                        ...this.state,
                        suboption: this.props.match.url.split('/')[4]
                    })
                    LoadPDF(this.props.LoadData,this.props.match.url.split('/')[2],this.props.setPdf,this.props.match.params.id)
                }
                if (this.props.match.url.split('/')[4]==="content"){
                    this.setState({
                        ...this.state,
                        suboption: this.props.match.url.split('/')[4]
                    })
                    LoadContent(this.props.setConspects,this.props.LoadData,this.props.match.params.id,this.props.match.params.conspectname,this.props.OpenConspect)
                }
            }
        }
    }


Contentpdf=()=>{
    return ((!this.props.dataisLoading)?
    <StyledPreview>
        <iframe className="pdf" src={this.props.curntpdf.pdf} title="Pdf of contnet"/>
    </StyledPreview>
    :
    <StyledInvite><img src={preloader} alt="some image"/></StyledInvite>)}

Content=()=>{
    return ((!this.props.dataisLoading)?
    <StyledPreview>
        <div className="scrolbar">
            {this.props.Photos.map(elm=>
            <div className="item">
                <img  src={elm.path} alt="some image"/>
            </div>)}
        </div>
    </StyledPreview>
    :
    <StyledInvite><img src={preloader} alt="some image"/></StyledInvite>)}
    render(){
    return (
        <StyledInterface>
            <NavBarContainer history={this.props.history} name={this.props.match.params.conspectname} id={this.props.match.params.id}/>
            {((this.props.match.url.split('/')[1]==="content") || (this.props.match.url.split('/')[4]==="pdf"))?<>{this.Contentpdf()}</>:<></>}
            {(this.props.match.url.split('/')[1]==="sample_pdf")?<>{this.Contentpdf()}</>:<></>}
            {(this.props.match.url.split('/')[4]==="content")?<>{this.Content()}</>:<></>}
            {(this.props.match.url.split('/')[1]==="help")?<>
            <StyledPreview>
                <iframe className="pdf" src={helppdf} title="Pdf of contnet"/>
            </StyledPreview></>:<></>}
        </StyledInterface>
    )
    }
}
export default Viewer;

const StyledPreview = styled.div`
margin-top:20px;
display: flex;
flex-direction: column;
width:100%;
height: 100%;

justify-content:center;
align-items: flex-start;
text-align:center;
.pdf{
    height: 100%;
    width: 100%;
    margin-bottom:20px;
}
.scrolbar{
    padding-top:20px;
    /*overflow-y: scroll;
    overflow-x: scroll;*/
    margin-bottom:20px;

    height: 100%;
    width: 100%;
    /*border-style: solid;
    border-width: 1px;
    border-color: #f1f1f1;
    */
    .item{
        margin:20px;
        margin-top:0px;
    }
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, .3);
    }
}
`;
const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;
`;


