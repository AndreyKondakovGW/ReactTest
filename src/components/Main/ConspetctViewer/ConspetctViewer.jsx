import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './ConspetctViewer.module.css';
import * as axios from 'axios';

class Viewer extends React.Component{
    componentDidMount(){
        {/*var fileDownload = require('js-file-download');*/}
         if (this.props.match.url.split('/')[1]=="content")
            console.log("Отправлелен запрос на получене  пдфки тэга "+this.props.match.url.split('/')[2])
            //axios('http://127.0.0.1:5000/gettagpdf/'+this.props.match.url.split('/')[2],
            //{   method: 'GET',
                //responseType: 'blob'}
            //).then(response =>{
                //const file = new Blob(
                    //[response.data], 
                    //{type: 'application/pdf'});
                //var fileURL = URL.createObjectURL(file);
                //this.props.setPdf(fileURL)
        //})
        if (this.props.match.url.split('/')[1]=="myconspects")
            console.log("Отправлелен запрос на получене  конспекта "+this.props.match.url.split('/')[2])
            //axios.get("http://127.0.0.1:5000/getconspectphotos").then(response =>{
            //console.log(response)
            //this.props.setConspect(response.data.conspects,response.data.pdf)
       // })
    }

    render(){
    return (
        
        <div>
            <NavBar name={this.props.match.params.contentname}/>
            <iframe className={s.pdf} src={this.props.curntpdf} />
        </div>
    )
    }
}

export default Viewer;