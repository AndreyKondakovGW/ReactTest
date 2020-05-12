import React from 'react';
import Button from '../../Button/Button';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from './TopicsComponent.jsx';
import * as axios from 'axios';



class TopicsAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <Button text={elm.name} path={"content/"+elm.name} /> )
        }
    }
    
    componentDidMount(){
        console.log("Отправлелен запрос на получение тэгов")
        axios.get("http://127.0.0.1:5000/gettags").then(response =>{
            console.log(response.data)
            this.props.setTopics(response.data)
        })
    }
    
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
        this.setState({    
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
                <Button text={elm.name} path={"content/"+elm.name} /> )
        })
        }
    }

    changePage=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({
            ReactContents: this.props.Topics.slice(this.props.Pagesize*(pageNum-1),this.props.Pagesize*pageNum).map(elm => <Button text={elm.name} path={"content/"+elm.name} /> )
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
            <NavBarContainer name="Мои тэги"/>
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