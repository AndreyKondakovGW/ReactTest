import React from 'react';
import Button from '../../Button/Button';
import NavBarContainer from '../NavBar/NavBarContainer.jsx';
import Topics from './TopicsComponent.jsx';
import * as axios from 'axios';
import ActionBox from '../../ActionBox/ActionBox';
import { StarFill, X} from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledTagBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
    align-items: flex-start;
.actionbox{
    background-color:#c0afd3;
    width:24px;
    height:24px;
    padding-left:4px;
    svg{
          margin-bottom:12px;  
    }
    margin-right:8px;
    :hover {
        background-color: rgb(255, 80, 80);
      }  
}

`;

class TopicsAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <StyledTagBox>
                <ActionBox icon={<X id="nosvgmargin"/>}  action={()=>{this.DeleteTag(elm.id)}}/> 
                <Button text={elm.name} icon={<StarFill/>} path={"content/"+elm.name} />
            </StyledTagBox> )
        }
    }
    
    componentDidMount(){
        console.log("Отправлелен запрос на получение тэгов")
        axios.get("http://127.0.0.1:5000/gettags").then(response =>{
            this.props.setTopics(response.data)
        })

    }
    DeleteTag(id){
        axios.delete("http://127.0.0.1:5000/delete_tag/"+id)
        this.setState({
            ReactContents : this.props.Topics.filter(elm=>elm.id!==id).slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <StyledTagBox>
                <ActionBox icon={<X id="nosvgmargin"/>}  action={()=>{this.DeleteTag(elm.id)}}/> 
                <Button text={elm.name} icon={<StarFill/>} path={"content/"+elm.name} />
            </StyledTagBox> )
        })
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps !== this.props) {
        this.setState({    
            ReactContents : this.props.Topics.slice(this.props.Pagesize*(this.props.CurrentPage-1),this.props.Pagesize*this.props.CurrentPage).map(elm => 
            <StyledTagBox>
                <ActionBox icon={<X id="nosvgmargin"/>} action={()=>{this.DeleteTag(elm.id)}}/> 
                <Button text={elm.name} icon={<StarFill/>} path={"content/"+elm.name} />
            </StyledTagBox> )
        })
        }
    }

    changePage=(pageNum)=>{
        this.props.setCurPage(pageNum)
        this.setState({
            ReactContents: this.props.Topics.slice(this.props.Pagesize*(pageNum-1),this.props.Pagesize*pageNum).map(elm =><><ActionBox text="Удалить тэг" action={()=>{this.DeleteTag(elm.id)}}/> <Button text={elm.name} path={"content/"+elm.name} /></> )
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