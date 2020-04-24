import React from 'react';
import ActionBox from '../ActionBox/ActionBox.jsx';
import ModalWindow from './ModalWindow.jsx';
import { LayoutTextSidebarReverse } from 'react-bootstrap-icons';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
const StyledCommentsList = styled.div`
    display: block;
`;


class CommenSaver extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: this.props.value
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit=()=> {
        console.log(this.props.isCreator) 
        this.props.save(this.props.isCreator,this.state.value) 
        this.props.submit()
    }

    handleChange=(e)=>{
        let value = e.target.value;
        this.setState({
            value: value
        })
    }
    render(){   
        return (
            <div>
                <textarea
                id="lineinput"
                       name="conspectname"
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder="Введите комментарий..."/>
                <ActionBox  id="lineab" text="Сохранить" action={this.handleSubmit}/>
            </div>
        )
    }
}



class CommentsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }

    openCommentList(){
        this.setState({
            isOpen: true
        })
    }

    closeCommentList(){
        console.log("close")
        this.setState({
            isOpen: false
        })
    }

    submitCommentList(){
        this.setState({
            isOpen: false
        })
    }

    render(){
        console.log(this.props)
        let open=()=>{
            this.openCommentList()
        }
        let submit=()=>{
            this.submitCommentList()
        }
        let cancal=()=>{
            this.closeCommentList()
        }
        return(
            <StyledCommentsList>
                <ActionBox text="Комментарий" icon={<LayoutTextSidebarReverse/>} action={open}/>
                <Route path = "/myconspects/:contentname" render ={()=>
                <ModalWindow  isOpen={this.state.isOpen}
                         titel={"В редакторе открыт конспект " + this.props.Name}
                         children={<CommenSaver value={this.props.CurrentComment} isCreator={false} submit={submit} save={this.props.save}/>}
                         submit={submit}
                         cancel={cancal}/>}
                         />
                <Route path ="/creteconspect" render ={()=>
                <ModalWindow  isOpen={this.state.isOpen}
                         titel={"В редакторе открыт конспект " + this.props.CreatorName}
                         children={<CommenSaver value={this.props.CurrentCommentCreator} isCreator={true} submit={submit} save={this.props.save}/>}
                         submit={submit}
                         cancel={cancal}/>}
                         />  
            </StyledCommentsList>
        )
    }

}

export default CommentsList;