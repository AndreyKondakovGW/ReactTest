import React from 'react';
import Conspects from '../MyConspect/MyConspectComponent.jsx';
import Conspectbox from '../MyConspect/Conspectbox/ConspectboxComponent.jsx';
import Contentbox from '../../Contentbox/Contentbox.jsx';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from '../Content/TopicsComponent';

class SubscribersContent extends React.Component{
    constructor(props){
        super(props)
        this.state={    
            ReactContentsConspect : this.props.Conspects.slice(this.props.ConspectPagesize*(this.props.ConspectCurrentPage-1),this.props.ConspectPagesize*this.props.ConspectCurrentPage).map(elm => 
            <Conspectbox 
                Readcted={true}
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id} 
                checkf={this.props.checked}
            /> ),
            ReactContentsTopics : this.props.Topics.slice(this.props.TopicsPagesize*(this.props.TopicsCurrentPage-1),this.props.TopicsPagesize*this.props.TopicsCurrentPage).map(elm => 
                <Contentbox text={elm.name} path={"/content/"+elm.name} /> )}
    }
    /*
    componentDidMount(){
            console.log("Отправлелен запрос на получение конспектов")
            axios.get("http://127.0.0.1:5000/getconspects").then(response =>{
                console.log(response.data)
                this.props.setConspect(response.data)
           })
           console.log("Отправлелен запрос на получене тэгов")
            axios.get("http://127.0.0.1:5000/gettags").then(response =>{
            console.log(response.data)
            this.props.setTopics(response.data)
        })
    }
    
        }
    */
   changePageConspect=(pageNum)=>{
    this.props.setCurPage(pageNum)
    this.setState({ 
        ...this.state,   
        ReactContentsConspect : this.props.Conspects.slice(this.props.ConspectPagesize*(this.props.ConspectCurrentPage-1),this.props.ConspectPagesize*this.props.ConspectCurrentPage).map(elm => 
            <Conspectbox 
                id={elm.id} 
                name={elm.name} 
                checked={elm.checked} 
                img={elm.img} 
                path={"/myconspects/"+elm.name+"/"+elm.id} 
                checkf={this.props.checked}
            /> )
    })
    }

    changePageTopics=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({
            ...this.state,
            ReactContentsTopics : this.props.Topics.slice(this.props.TopicsPagesize*(this.props.TopicsCurrentPage-1),this.props.TopicsPagesize*this.props.TopicsCurrentPage).map(elm => 
                <Contentbox text={elm.name} path={"/content/"+elm.name} /> )
        })
    }

   render(){
    let pagescountC=Math.ceil(this.props.Conspectcount /this.props.ConspectPagesize);
    let pagesC=[];
    for(let i=1;i<=pagescountC;i++){
        pagesC.push(i)
    }
    //-----------------------------------------------------------------
    let pagescountT=Math.ceil(this.props.Topicscount /this.props.TopicsPagesize);
    let pagesT=[];
    for(let i=1;i<=pagescountT;i++){
        pagesT.push(i)
    }
    return (
    <div> 
            <NavBarContainer name={"Контенет пользователя "+ this.props.match.url.split('/')[2]}/>
            <h1>Конспекты</h1>
            <Conspects
                pages={pagesC}
                CurrentPage={this.props.ConspectCurrentPage}
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