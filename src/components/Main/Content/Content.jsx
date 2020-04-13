import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';
import s from './Content.module.css';
import NavBar from '../NavBar/NavBar';
import * as axios from 'axios';



class Topics extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => <Contentbox text={elm.name} path={"/content/"+elm.path} /> )
        }
    }
    getTopics=()=>{
        axios.get("https://getconspect").then(response =>{
            this.props.setConspect(response.data.conspects)
        })
    }

    changePage=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({
            ReactContents: this.props.Topics.slice(this.props.Pagesize*(pageNum-1),this.props.Pagesize*pageNum).map(elm => <Contentbox text={elm.name} path={"/content/"+elm.path} /> )
        })
    }

    render(){  
        let pagescount=Math.ceil(this.props.Topicscount /this.props.Pagesize);

        let pages=[];
        for(let i=1;i<=pagescount;i++){
            pages.push(i)
        }
        return(   
        <div>
            
            <NavBar name="Main"/>
            {pages.map(elm=><span className={this.props.CurrentPage ===elm && s.selected} onClick={()=>{this.changePage(elm)}}>{elm}</span>)}
            <div className={s.wrapper}>           
                {this.state.ReactContents}                
            </div>
        </div>
        )
    }
}
export default Topics;