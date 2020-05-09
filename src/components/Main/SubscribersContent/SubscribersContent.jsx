import React from 'react';

import img1 from '../../../static/images/bobr1.jpg';
import img2 from '../../../static/images/bobr2.jpg';
import img3 from '../../../static/images/bobr3.jpeg';

import Conspects from '../MyConspect/MyConspectComponent.jsx';
import Conspectbox from '../MyConspect/Conspectbox/ConspectboxComponent.jsx';
import Contentbox from '../../Contentbox/Contentbox.jsx';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from '../Content/TopicsComponent';
import * as axios from 'axios';

class SubscribersContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ConspectCurrentPage:1,
            TopicCurentPage:1,
            ConspectPagesize:3,
            TopicsPagesize:3,
            Conspects:[
                {name: "Ежи",id: 1,img: img1},
                {name: "Змеи",id: 2,img: img2},
                {name: "Bobrconspect",id: 3,img: img3}
            ], 
            Topics:[
                {name: "тема 1", id:1},
                {name: "тема 2", id:2},
                {name: "тема 3", id:3}],
        }
        this.setState({
            ...this.state,
            ReactContentsConspect : this.state.Conspects.slice(this.props.ConspectPagesize*(this.props.ConspectCurrentPage-1),this.props.ConspectPagesize*this.props.ConspectCurrentPage).map(elm => 
                <Conspectbox 
                    Readcted={true}
                    id={elm.id} 
                    name={elm.name} 
                    checked={elm.checked} 
                    img={elm.img} 
                    path={"/myconspects/"+elm.name+"/"+elm.id} 
                    checkf={this.props.checked}
                /> ),
            ReactContentsTopics : this.state.Topics.slice(this.props.TopicsPagesize*(this.props.TopicsCurrentPage-1),this.props.TopicsPagesize*this.props.TopicsCurrentPage).map(elm => 
                <Contentbox text={elm.name} path={"/content/"+elm.name} /> )
        })
    }
    setConspectCurPage(n){
        console.log(n)
        console.log(this.state)
        this.setState({
            ...this.state,
            ConspectCurrentPage:n
        })
        console.log(this.state)
    }
    
    componentDidMount(){
            console.log("Отправлелен запрос на получение конспектов")
            console.log(this.props.match.url.split('/'))
            console.log(this.props.match.url)
            axios.get("http://127.0.0.1:5000/get_opened_conspects/"+this.props.match.url.split('/')[3]).then(response =>{
                console.log(response.data)
                this.setState({
                    ...this.state,
                    Conspects: response.data.map(function(elm){return({...elm,img: img1})}),
                    ReactContentsConspect : response.data.map(function(elm){return({...elm,img: img1})}).slice(this.props.ConspectPagesize*(this.props.ConspectCurrentPage-1),this.props.ConspectPagesize*this.props.ConspectCurrentPage).map(elm => 
                        <Conspectbox 
                            Readcted={true}
                            id={elm.id} 
                            name={elm.name} 
                            checked={elm.checked} 
                            img={elm.img} 
                            path={"/myconspects/"+elm.name+"/"+elm.id} 
                            checkf={this.props.checked}
                        /> )
                })
           })
           console.log("Отправлелен запрос на получене тэгов")
           /*
            axios.get("http://127.0.0.1:5000/gettags").then(response =>{
            console.log(response.data)
            this.props.setTopics(response.data)
        })
        */
    }
    
   changePageConspect=(pageNum)=>{
    console.log(pageNum)
    this.setConspectCurPage(pageNum)
    this.setState({ 
        ...this.state,   
        ReactContentsConspect : this.state.Conspects.slice(this.state.ConspectPagesize*(this.state.ConspectCurrentPage-1),this.state.ConspectPagesize*this.state.ConspectCurrentPage).map(elm => 
            <Conspectbox 
                Readcted={true}
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id} 
                checkf={this.props.checked}
            /> )
    })
    console.log(this.state)
    }

    changePageTopics=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({
            ...this.state,
            ReactContentsTopics : this.state.Topics.slice(this.props.TopicsPagesize*(this.props.TopicsCurrentPage-1),this.props.TopicsPagesize*this.props.TopicsCurrentPage).map(elm => 
                <Contentbox text={elm.name} path={"/content/"+elm.name} /> )
        })
    }

   render(){
    

    let pagescountC=Math.ceil(this.state.Conspects.length /this.state.ConspectPagesize);
    let pagesC=[];
    for(let i=1;i<=pagescountC;i++){
        pagesC.push(i)
    }
    //-----------------------------------------------------------------
    let pagescountT=Math.ceil(this.state.Topics.length /this.props.TopicsPagesize);
    let pagesT=[];
    for(let i=1;i<=pagescountT;i++){
        pagesT.push(i)
    }
    console.log(this.state.ConspectCurrentPage)
    return (
    <div> 
            <NavBarContainer name={"Контенет пользователя "+ this.props.match.url.split('/')[2]}/>
            <h1>Конспекты</h1>
            <Conspects
                pages={pagesC}
                CurrentPage={this.state.ConspectCurrentPage}
                changePage={this.changePageConspect}
                ReactContents={this.state.ReactContentsConspect}> 
            </Conspects>
            <h1>Тэги</h1>
            <Topics pages={pagesT} 
                CurrentPage={this.props.TopicsCurrentPage} 
                changePage={this.changePageTopics}
                ReactContents={this.state.ReactContentsTopics}>
            </Topics>                   
    </div>
    )
}
}
export default SubscribersContent