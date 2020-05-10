import React from 'react';

import img1 from '../../../static/images/bobr1.jpg';
import img2 from '../../../static/images/bobr2.jpg';
import img3 from '../../../static/images/bobr3.jpeg';

import Conspects from '../MyConspect/MyConspectComponent.jsx';
import Conspectbox from '../MyConspect/Conspectbox/ConspectboxComponent.jsx';
import Button from '../../Button/Button';
//import Contentbox from '../../Contentbox/Contentbox.jsx';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from '../Content/TopicsComponent';
import * as axios from 'axios';
import styled from 'styled-components';

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
                    path={"/subscriberconspects/"+elm.name+"/"+elm.id} 
                    checkf={this.props.checked}
                /> ),
            ReactContentsTopics : this.state.Topics.slice(this.props.TopicsPagesize*(this.props.TopicsCurrentPage-1),this.props.TopicsPagesize*this.props.TopicsCurrentPage).map(elm => 
                <Button text={elm.name} path={"/content/"+elm.name} /> )
        })
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
                            path={"/subscriberconspects/"+elm.name+"/"+elm.id+"/content"} 
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
    this.setState({ 
        ...this.state,
        ConspectCurrentPage: pageNum,
        ReactContentsConspect : this.state.Conspects.slice(this.state.ConspectPagesize*(pageNum-1),this.state.ConspectPagesize*pageNum).map(elm => 
            <Conspectbox 
                Readcted={true}
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/subscriberconspects/"+elm.name+"/"+elm.id+"/content"} 
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
                <Button text={elm.name} path={"/content/"+elm.name} /> )
        })
    }

   render(){
    

    let pagescountC=Math.ceil(this.state.Conspects.length / this.state.ConspectPagesize);
    let pagesC=[];
    for(let i=1;i<=pagescountC;i++){
        pagesC.push(i)
    }
    //-----------------------------------------------------------------
    let pagescountT=Math.ceil(this.state.Topics.length / this.props.TopicsPagesize);
    let pagesT=[];
    for(let i=1;i<=pagescountT;i++){
        pagesT.push(i)
    }
    console.log(this.state.ConspectCurrentPage)
    return (
    <StyledInterface> 
            <NavBarContainer name={"Контент пользователя "+ this.props.match.url.split('/')[2]}/>
            <div className="contentbox">
                <div className="contentname">Конспекты</div>
                <Conspects
                    pages={pagesC}
                    CurrentPage={this.state.ConspectCurrentPage}
                    changePage={this.changePageConspect}
                    ReactContents={this.state.ReactContentsConspect}> 
                </Conspects>
            </div>   
    </StyledInterface>
    )
}
}
export default SubscribersContent;
const StyledInterface = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100%;
.contentname{
    padding-left:16px;
    font-size: 20px;
    height:35px;
line-height: 35px;
}
.contentbox{
    display: flex;
flex-direction: column;
}
`;

{/*const StyledLine = styled.div`
font-size: 20px;
text-align: center;
*{
    display:inline-block;
}
`;*/}
