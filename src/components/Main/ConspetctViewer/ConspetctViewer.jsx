import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './ConspetctViewer.module.css';
import preloader from '../../../static/2.gif'
import * as axios from 'axios';

class Viewer extends React.Component{
    
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
            this.props.LoadData()
            console.log("Отправлелен запрос на получене  конспекта "+this.props.match.url.split('/')[2])
            axios('http://127.0.0.1:5000/getconspectpdf/'+this.props.match.url.split('/')[2],
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
    }
    
}
Content=()=>{return ((!this.props.dataisLoading)?
    <iframe className={s.pdf} src={this.props.curntpdf.pdf} />:
<div>
    <img src={preloader} width={500} height={500}></img>
</div>)}
    render(){
    return (
        <div>
            <NavBar name={this.props.match.params.contentname} id={this.props.match.params.id}/>
            {this.Content()}
        </div>
    )
    }
}

export default Viewer;