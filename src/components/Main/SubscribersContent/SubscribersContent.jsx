import React from 'react';
import Conspects from '../MyConspect/MyConspectComponent.jsx';
import Conspectbox from '../MyConspect/Conspectbox/ConspectboxComponent.jsx';
import Button from '../../Button/Button';
//import Contentbox from '../../Contentbox/Contentbox.jsx';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from '../Content/TopicsComponent';
import styled from 'styled-components';
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
                <Button text={elm.name} path={"content/"+elm.name} /> )}
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
                <Button text={elm.name} path={"content/"+elm.name} /> )
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
    <StyledInterface> 
            <NavBarContainer name={"Контент пользователя "+ this.props.match.url.split('/')[2]}/>
            <div className="contentbox">
                <div className="contentname">Конспекты</div>
                <Conspects
                    pages={pagesC}
                    CurrentPage={this.props.ConspectCurrentPage}
                    changePage={this.changePageConspect}
                    ReactContents={this.state.ReactContentsConspect}> 
                </Conspects>
            </div>
            
            <div className="contentbox">
                <div className="contentname">Тэги</div>
                <Topics pages={pagesT} 
                        CurrentPage={this.props.TopicsCurrentPage} 
                        changePage={this.changePageTopics}
                        ReactContents={this.state.ReactContentsTopics}>
                </Topics>   
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
