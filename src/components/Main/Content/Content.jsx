import React from 'react';
import Contentbox from '../../Contentbox/Contentbox';
import Topics from './TopicsComponent.jsx';
import * as axios from 'axios';



class TopicsAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <Contentbox text={elm.name} path={"/content/"+elm.path} /> )
        }
    }
    componentDidMount(){
        //axios.get("https://getconspect/:page=2 & pagesize=2").then(response =>{
           // this.props.setTopics(response.data.conspects)
        //})
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
            <Topics pages={pages} 
                    CurrentPage={this.props.CurrentPage} 
                    changePage={this.changePage}
                    ReactContents={this.state.ReactContents}>
            </Topics>
        </div>
        )
    }
}
export default TopicsAPI;