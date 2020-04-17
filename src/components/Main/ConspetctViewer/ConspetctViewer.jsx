import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './ConspetctViewer.module.css';

class Viewer extends React.Component{
    componentDidMount(){
       // if (this.props.match.url.split('/')[1]=="content")
            //axios.get("https://gettopic").then(response =>{
            //this.props.setPdf(response.data.conspects)
        //})
       // if (this.props.match.url.split('/')[1]=="myconspects")
            //axios.get("https://myconspects").then(response =>{
            //this.props.setConspect(response.data.conspects,response.data.pdf)
        //})
    }

    render(){
        console.log()
    return (
        
        <div>
            <NavBar name={this.props.match.params.contentname}/>
            <iframe className={s.pdf} src={this.props.curntpdf} titel={this.props.match.params.contentname}></iframe>
        </div>
    )
    }
}

export default Viewer;